"use client";

import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
}

interface ReviewsData {
  name: string;
  rating: number;
  totalRatings: number;
  reviews: Review[];
}

export function GoogleReviewsWidget() {
  const [reviewsData, setReviewsData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/google-reviews");
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        setReviewsData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load reviews");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <div className="w-full">
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-8 shadow-card border border-border/50 animate-pulse"
            >
              <div className="h-4 bg-muted rounded w-3/4 mb-4"></div>
              <div className="h-20 bg-muted rounded mb-4"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error || !reviewsData || !reviewsData.reviews || reviewsData.reviews.length === 0) {
    return (
      <div className="w-full">
        <div className="bg-muted/50 rounded-lg p-8 text-center border border-dashed border-border">
          <p className="text-muted-foreground mb-4">
            {error || "No reviews available"}
          </p>
          <p className="text-sm text-muted-foreground">
            To display Google Reviews, add the following to your <code className="bg-background px-2 py-1 rounded">.env.local</code>:
          </p>
          <div className="mt-4 text-left max-w-md mx-auto space-y-1 text-xs font-mono bg-background p-4 rounded">
            <p>NEXT_PUBLIC_GOOGLE_PLACE_ID=your_place_id</p>
            <p>GOOGLE_PLACES_API_KEY=your_api_key</p>
          </div>
        </div>
      </div>
    );
  }

  const reviews = reviewsData.reviews.slice(0, 6); // Show first 6 reviews

  return (
    <div className="w-full">
      {reviewsData.totalRatings > 0 && (
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${
                    i < Math.round(reviewsData.rating)
                      ? "fill-primary text-primary"
                      : "fill-muted text-muted"
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">
              {reviewsData.rating.toFixed(1)}
            </span>
          </div>
          <p className="text-muted-foreground">
            Based on {reviewsData.totalRatings.toLocaleString()} Google reviews
          </p>
        </div>
      )}
      
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <motion.div
            key={`${review.author_name}-${review.time}`}
            className="bg-card rounded-2xl p-8 shadow-card border border-border/50 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Quote className="h-10 w-10 text-sage-light absolute top-6 right-6" />
            <div className="flex gap-1 mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground leading-relaxed mb-6 italic line-clamp-4">
              "{review.text}"
            </p>
            <div className="border-t border-border pt-4">
              <p className="font-semibold text-foreground">{review.author_name}</p>
              <p className="text-sm text-muted-foreground">
                {review.relative_time_description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

