import Image from "next/image";

type ImagePanelProps = {
  src: string;
  alt: string;
  label?: string;
};

export default function ImagePanel({ src, alt, label }: ImagePanelProps) {
  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-lg shadow-soft">
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      {label ? (
        <div className="absolute bottom-5 left-5 rounded-lg bg-white/95 px-5 py-3 text-sm font-semibold text-clinic-900 shadow-sm">
          {label}
        </div>
      ) : null}
    </div>
  );
}
