type HeroProps = {
  title: string;
  subtitle?: string;
  variant?: "video" | "image";
  image?: string;
  video?: string;
  overlay?: boolean;
  ctaPrimary?: {
    label: string;
    href: string;
  };
  ctaSecondary?: {
    label: string;
    href: string;
  };
  features?: {
    title: string;
    description: string;
  }[];
};

export default function Hero({
  title,
  subtitle,
  variant = "video",
  image,
  video,
  overlay,
  ctaPrimary,
  ctaSecondary,
  features,
}: HeroProps) {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {/* BACKGROUND */}
      {variant === "video" && video && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
      )}

      {variant === "image" && image && (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* OVERLAY */}
      {overlay && <div className="absolute inset-0 bg-black/50" />}

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="grid w-full gap-8 md:grid-cols-2">
          
          {/* LEFT BLOCK */}
          <div className="max-w-xl rounded-2xl bg-white/90 p-8 backdrop-blur">
            <h1 className="text-4xl font-bold text-gray-900">
              {title}
            </h1>

            {subtitle && (
              <p className="mt-4 text-gray-700">
                {subtitle}
              </p>
            )}

            {(ctaPrimary || ctaSecondary) && (
              <div className="mt-6 flex flex-wrap gap-3">
                {ctaPrimary && (
                  <a
                    href={ctaPrimary.href}
                    className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-2 text-sm font-semibold text-white hover:bg-blue-900"
                  >
                    {ctaPrimary.label} →
                  </a>
                )}

                {ctaSecondary && (
                  <a
                    href={ctaSecondary.href}
                    className="rounded-md border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                  >
                    {ctaSecondary.label}
                  </a>
                )}
              </div>
            )}
          </div>

          {/* RIGHT BLOCK – FEATURES */}
          {features && features.length > 0 && (
            <div className="hidden md:flex items-center">
              <div className="w-full rounded-2xl bg-white/90 p-8 backdrop-blur">
                <ul className="space-y-6">
                  {features.map((item) => (
                    <li key={item.title} className="flex items-start gap-4">
                      <span className="mt-1 text-green-500 text-xl">✔</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
