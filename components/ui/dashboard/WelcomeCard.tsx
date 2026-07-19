import { Button } from "@/components/ui/button";

export default function WelcomeCard() {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-2xl
        h-[320px]
        w-full
        bg-cover
        bg-center
      "
      style={{
        backgroundImage: "url('/images/team.jpg')",
      }}
    >
      {/* Content */}
      <div className="absolute left-10 top-10 max-w-[520px]">
        <h1
          className="
            font-[Geist]
            text-[30px]
            leading-[36px]
            font-bold
            text-white
          "
        >
          Build Amazing Teams
        </h1>

        <p
          className="
            mt-4
            font-[Geist]
            text-[18px]
            leading-[28px]
            font-normal
            text-stone-200
          "
        >
          Connect with diverse talent and create inclusive workspaces
          that drive innovation. Discover how our platform helps you
          build stronger teams.
        </p>

      <Button
  className="
    mt-8
    h-[44px]
    w-[116px]
    rounded-[8px]
    border
    border-[#1C1917]
    bg-[linear-gradient(180deg,#44403C_0%,#292524_100%)]
    text-[#FAFAF9]
    font-[Geist]
    text-[16px]
    font-normal
    leading-6
    shadow-[0px_1px_2px_rgba(0,0,0,0.05),inset_0px_1px_0px_rgba(255,255,255,0.25),inset_0px_2px_0px_rgba(255,255,255,0.35)]
    hover:bg-[linear-gradient(180deg,#44403C_0%,#292524_100%)]
  "
>
  Get Started
</Button>
      </div>
    </section>
  );
}