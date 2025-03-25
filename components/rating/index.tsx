"use client";
import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: number;
  className?: string;
  showValue?: boolean;
}

export default function RatingStars({
  rating,
  maxRating = 5,
  size = 20,
  className = "",
}: RatingStarsProps) {
  const fullStars = Math.floor(rating);
  const partialStar = rating % 1;
  const emptyStars = Math.floor(maxRating - rating);

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star
          key={`full-${i}`}
          size={size}
          className="fill-yellow-400 text-yellow-400"
        />
      ))}

      {partialStar > 0 && (
        <div className="relative">
          <Star size={size} className="text-gray-300" />

          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${partialStar * 100}%` }}
          >
            <Star size={size} className="fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      )}

      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star key={`empty-${i}`} size={size} className="text-gray-300" />
      ))}
    </div>
  );
}
