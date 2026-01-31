"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    title: 'I left "AMMA Hospital with confidence!"',
    content: "I recently underwent vision correction at AMMA Hospital and was thoroughly impressed with the quality of service...",
    author: "JYOTHI REDDY",
    link: "https://www.google.com/maps/place/Amma+Eye+Care+Hospital/@17.3412647,78.555624,842m/data=!3m1!1e3!4m8!3m7!1s0x3bcb98a906c50f4f:0x27f26d05063b4290!8m2!3d17.3412596!4d78.5581989!9m1!1b1!16s%2Fg%2F11bwhbb2n4",
  },
  {
    title: '"Trusted care that restored my dad\'s eyesight!"',
    content: "We had a wonderful experience at Amma Eye Care Hospital, Chintalkunta. My dad underwent cataract surgery for both eyes...",
    author: "Greeshma Kandhala",
    link: "https://www.google.com/maps/place/Amma+Eye+Care+Hospital/@17.3412647,78.555624,842m/data=!3m1!1e3!4m8!3m7!1s0x3bcb98a906c50f4f:0x27f26d05063b4290!8m2!3d17.3412596!4d78.5581989!9m1!1b1!16s%2Fg%2F11bwhbb2n4",
  },
  {
    title: '"Supportive staff and successful treatment!"',
    content: "Hi mam, We went for eye surgery in your hospital, it's really good treatment and having nice follow ups with patient. Total...",
    author: "Umamaheswara Rao Goli",
    link: "https://www.google.com/maps/place/Amma+Eye+Care+Hospital/@17.3412647,78.555624,842m/data=!3m1!1e3!4m8!3m7!1s0x3bcb98a906c50f4f:0x27f26d05063b4290!8m2!3d17.3412596!4d78.5581989!9m1!1b1!16s%2Fg%2F11bwhbb2n4",
  },
  {
    title: '"Thoughtful care that helped my mother see clearly again!"',
    content: "My mother recently got her right eye cataract surgery done here. The doctor clearly explained her condition and...",
    author: "Brahmani Chowdary",
    link: "https://www.google.com/maps/place/Amma+Eye+Care+Hospital/@17.3412647,78.555624,842m/data=!3m1!1e3!4m8!3m7!1s0x3bcb98a906c50f4f:0x27f26d05063b4290!8m2!3d17.3412596!4d78.5581989!9m1!1b1!16s%2Fg%2F11bwhbb2n4",
  },
  {
    title: '"Supportive treatment when I needed it most!"',
    content: "I recently visited this hospital after an eye injury, and the hospital staff were very supportive and kind. A special thanks to ...",
    author: "Dinesh Thakkashila",
    link: "https://www.google.com/maps/place/Amma+Eye+Care+Hospital/@17.3412647,78.555624,842m/data=!3m1!1e3!4m8!3m7!1s0x3bcb98a906c50f4f:0x27f26d05063b4290!8m2!3d17.3412596!4d78.5581989!9m1!1b1!16s%2Fg%2F11bwhbb2n4",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [visibleCards, setVisibleCards] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2)
      } else {
        setVisibleCards(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - visibleCards)

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
  }

  return (
    <section 
      className="py-12 md:py-20"
      style={{
        backgroundImage: "linear-gradient(90deg, #dcf5ff, rgba(220, 245, 255, 0.8))"
      }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header with navigation buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
            Client Testimonials
          </h2>
          <div className="flex gap-2">
            <Button
              variant="default"
              size="icon"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="rounded-full bg-[#355C9D] hover:bg-[#2a4a7d] disabled:opacity-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="default"
              size="icon"
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className="rounded-full bg-[#355C9D] hover:bg-[#2a4a7d] disabled:opacity-50"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden pb-4">
          <div
            ref={sliderRef}
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards + 2)}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-card rounded-2xl p-6 md:p-7 flex flex-col justify-between shadow-sm"
                style={{
                  width: `calc(${100 / visibleCards}% - ${(visibleCards - 1) * 24 / visibleCards}px)`,
                }}
              >
                <div>
                  {/* Quote icon */}
                  <Image
                    src="/quotes-icon.svg"
                    alt="Quote"
                    width={26}
                    height={26}
                    className="mb-4"
                  />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {testimonial.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">
                    {testimonial.content}{" "}
                    <a
                      href={testimonial.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#355C9D] font-semibold hover:underline"
                    >
                      Read More
                    </a>
                  </p>
                </div>

                <div>
                  <hr className="border-t border-dashed border-[#C8D6E5] my-6" />
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                      <Image
                        src="/profile-avatar-icon.svg"
                        alt={testimonial.author}
                        width={44}
                        height={44}
                        className="rounded-full"
                      />
                      <div className="font-semibold text-foreground">
                        {testimonial.author}
                      </div>
                    </div>
                    <Image
                      src="/google-review-icon.svg"
                      alt="Google Review"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
