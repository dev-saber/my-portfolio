import { useState, useEffect, useRef } from "react";

const AnimatedCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showHint, setShowHint] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | number | null>(null);
  const animationTimeoutsRef = useRef<Array<NodeJS.Timeout | number>>([]);

  useEffect(() => {
    const startAnimation = () => {
      const firstSkillTag = document.querySelector("[data-skill-tag]");
      if (!firstSkillTag) return;

      const rect = firstSkillTag.getBoundingClientRect();
      const targetX = rect.left + rect.width / 2;
      const targetY = rect.top + rect.height / 2;

      // Start cursor from the right side of the screen
      const startX = window.innerWidth + 50;
      const startY = targetY;

      // Set initial position
      setCursorPosition({ x: startX, y: startY });
      setIsVisible(true);

      // Animate to target position
      animationTimeoutsRef.current.push(
        setTimeout(() => {
          setCursorPosition({ x: targetX, y: targetY });
        }, 100)
      );

      // Show hint after cursor reaches target (after animation completes)
      animationTimeoutsRef.current.push(
        setTimeout(() => {
          setShowHint(true);
        }, 800) // Wait for cursor animation to complete
      );

      // Hide hint first, then hide cursor
      animationTimeoutsRef.current.push(
        setTimeout(() => {
          setShowHint(false);
        }, 3200) // Show hint for 2 seconds
      );

      animationTimeoutsRef.current.push(
        setTimeout(() => {
          setIsVisible(false);
        }, 3500) // Hide cursor 300ms after hint disappears
      );
    };

    const scheduleAnimation = () => {
      startAnimation();
      timeoutRef.current = setTimeout(scheduleAnimation, 10000);
    };

    // Start the first animation after a short delay
    const initialTimeout = setTimeout(() => {
      scheduleAnimation();
    }, 1000);

    return () => {
      clearTimeout(initialTimeout);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      animationTimeoutsRef.current.forEach((timeoutId) => clearTimeout(timeoutId));
      animationTimeoutsRef.current = [];
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Animated Cursor */}
      <div
        className="absolute transition-all duration-1000 ease-out"
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="relative">
          {/* Hand Cursor Icon */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            className="text-green-500 drop-shadow-lg"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              fill="currentColor"
              stroke="white"
              strokeWidth="1"
              strokeLinejoin="round"
              d="M10 11V8.99c0-.88.59-1.64 1.44-1.86h.05A1.99 1.99 0 0 1 14 9.05V12v-2c0-.88.6-1.65 1.46-1.87h.05A1.98 1.98 0 0 1 18 10.06V13v-1.94a2 2 0 0 1 1.51-1.94h0A2 2 0 0 1 22 11.06V14c0 .6-.08 1.27-.21 1.97a7.96 7.96 0 0 1-7.55 6.48 54.98 54.98 0 0 1-4.48 0 7.96 7.96 0 0 1-7.55-6.48C2.08 15.27 2 14.59 2 14v-1.49c0-1.11.9-2.01 2.01-2.01h0a2 2 0 0 1 2.01 2.03l-.01.97v-10c0-1.1.9-2 2-2h0a2 2 0 0 1 2 2V11Z"
            />
          </svg>
        </div>
      </div>

      {/* Hint Tooltip */}
      {showHint && (
        <div
          className="hidden md:block font-mono bg-white dark:bg-slate-900 text-neutral-700 dark:text-neutral-200 text-xs px-4 py-2 shadow-lg absolute rounded-lg font-medium"
          style={{
            left: cursorPosition.x + 20,
            top: cursorPosition.y - 50,
            opacity: 1,
            animation: "fade-in 0.3s ease-in-out",
          }}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Click to filter by technology!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimatedCursor;
