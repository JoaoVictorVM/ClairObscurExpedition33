interface ResponsivePictureProps {
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
  className?: string;
  dataSpeed?: number;
}

export function ResponsivePicture({
  desktopSrc,
  mobileSrc,
  alt,
  className = "",
  dataSpeed,
}: ResponsivePictureProps) {
  return (
    <picture className={className} data-speed={dataSpeed}>
      <source media="(max-width: 600px)" srcSet={mobileSrc} />
      <img
        src={desktopSrc}
        alt={alt}
        className="w-full h-full object-cover absolute"
      />
    </picture>
  );
}
