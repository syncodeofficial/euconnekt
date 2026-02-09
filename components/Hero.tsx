type HeroProps = {
  title: string;
  subtitle?: string;
  variant?: "video" | "image";
  image?: string;          // ✅ ADICIONAR
  video?: string;          // (se ainda não existir)
  overlay?: boolean;
  ctaPrimary?: {
    label: string;
    href: string;
  };
  ctaSecondary?: {
    label: string;
    href: string;
  };
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
      {overlay && (
        <div className="absolute inset-0 bg-black/50" />
      )}

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-xl rounded-xl bg-white/90 p-8 backdrop-blur">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          {subtitle && (
            <p className="mt-3 text-gray-600">{subtitle}</p>
          )}

          {(ctaPrimary || ctaSecondary) && (
            <div className="mt-6 flex gap-3">
              {ctaPrimary && (
                <a
                  href={ctaPrimary.href}
                  className="rounded-md bg-blue-600 px-4 py-2 text-white"
                >
                  {ctaPrimary.label}
                </a>
              )}
              {ctaSecondary && (
                <a
                  href={ctaSecondary.href}
                  className="rounded-md border px-4 py-2"
                >
                  {ctaSecondary.label}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
