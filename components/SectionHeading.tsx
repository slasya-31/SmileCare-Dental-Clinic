type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  level?: "h1" | "h2";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  level = "h2"
}: SectionHeadingProps) {
  const Heading = level;

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="text-sm font-bold uppercase tracking-widest text-clinic-600">{eyebrow}</p> : null}
      <Heading className="mt-3 text-3xl font-bold tracking-normal text-clinic-900 sm:text-4xl">{title}</Heading>
      {description ? <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}
