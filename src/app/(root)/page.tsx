import MaxWidthContainer from "@/components/shared/MaxWidthContainer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Karma, Kavoon, Kantumruy_Pro, Kaisei_Tokumin } from "next/font/google";
import Image from "next/image";

import stars from "../../../public/assets/stars.svg";

const kavoon = Kavoon({
  subsets: ["latin"],
  weight: "400",
});

const karma = Karma({
  subsets: ["latin"],
  weight: "700",
});

const kantumruy = Kantumruy_Pro({
  subsets: ["latin"],
});

const kaisei = Kaisei_Tokumin({
  subsets: ["latin"],
  weight: "400",
});

const services = [
  {
    img: "/assets/developer.png",
    title: "Developer Friendly",
    description: "compatible tools with for up to 35x capacity",
  },
  {
    img: "/assets/performance.png",
    title: "High Performance",
    description:
      "Support popular programming languages: Solidity, JavaScript, React; with a short block time.",
  },
  {
    img: "/assets/reliable.png",
    title: "Reliable",
    description:
      "Temporary capacity allowing high capacity and less congestion",
  },
  {
    img: "/assets/currency-exchange.png",
    title: "Tokenisation",
    description:
      "Tokenise and let your startup be on our future listing after development",
  },
];

export default function Home() {
  return (
    <div className="flex-1">
      <MaxWidthContainer className="flex justify-between py-10 gap-6">
        <div className="flex flex-col">
          <h1
            className={cn(
              "text-primary text-[44px] leading-[55px] w-full max-w-[807px]",
              kavoon.className
            )}>
            BLOCKONOMY: WHERE YOUR STARTUP DREAMS BECOMES REALITY
          </h1>

          <div className="mt-[77px] w-[462px] text-center space-y-8">
            <p className={cn("text-primary text-2xl", kavoon.className)}>
              From Business to Blockchain,we make it simple
            </p>
            <p className={cn("text-primary text-2xl", kavoon.className)}>
              Tokenize your <br /> Startups With Blockonomy
            </p>

            <div className="flex items-center justify-center gap-4">
              <Button
                className={cn("font-black pt-1.5", karma.className)}
                size="lg">
                APPLY
              </Button>
              <Button
                className={cn("font-black pt-1.5", karma.className)}
                size="lg"
                variant="outline">
                JOIN US
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/assets/banner.svg"
            alt="banner"
            width={500}
            height={567}
            priority
            className="object-cover"
          />
        </div>
      </MaxWidthContainer>

      <MaxWidthContainer className="flex items-center justify-between py-10 gap-6">
        <div className="w-[477px]">
          <Image
            src="/assets/img-1.svg"
            alt=""
            width={447}
            height={463}
            priority
          />
        </div>
        <div className="flex flex-col gap-6">
          <p
            className={cn(
              "text-xl font-bold text-center w-[799px]",
              kantumruy.className
            )}>
            Blockonomy is built by developers for developers. We understand the
            challenges and opportunites of startup development and we have
            designed our platform to meet your unique needs
          </p>
          <p
            className={cn(
              "text-xl font-bold text-center w-[880px]",
              kantumruy.className
            )}>
            With Blockonomy, you can build, collaborate and tokenize your
            startups and product in one simple platform. We got everything you
            need to take your startup to the next level.
          </p>
        </div>
      </MaxWidthContainer>

      <MaxWidthContainer className="flex items-center justify-between py-10 gap-6">
        <div className="border-2 border-primary w-full flex items-center gap-6 justify-between p-4">
          <div className="flex flex-col items-center gap-12">
            <h1 className={cn("text-4xl font-black", kaisei.className)}>
              Easily Build on Blockonomy
            </h1>

            <div className="flex items-center gap-6">
              <div className="flex flex-col gap-2 w-[380px] text-center">
                <h2 className={cn("text-2xl font-bold", kaisei.className)}>
                  Compability
                </h2>
                <p className={cn("font-semibold", kaisei.className)}>
                  Blockonomy supports the most popular Programming languages,
                  flexible tools and comes with a clear and canonical
                  documentation.You can quickly start and deploy your
                  application on blockonomy.
                </p>
              </div>
              <div className="flex flex-col gap-2 w-[380px] text-center">
                <h2 className={cn("text-2xl font-bold", kaisei.className)}>
                  Tokenization
                </h2>
                <p className={cn("font-semibold", kaisei.className)}>
                  Tokenize your startup and product immediately after
                  development and deployment, letting be on future trading
                  listing for investors to stake and invest tokens as funds for
                  your products.
                </p>
              </div>
            </div>
          </div>

          <div>
            <Image
              src="/assets/img-2.svg"
              alt=""
              width={475}
              height={309}
              priority
            />
          </div>
        </div>
      </MaxWidthContainer>

      <MaxWidthContainer className="flex items-center justify-between py-10 gap-6">
        <div className="flex flex-col gap-6">
          <p
            className={cn(
              "text-xl font-bold text-center w-[646px]",
              kantumruy.className
            )}>
            Blockonomy is built by developers for developers. We understand the
            challenges and opportunites of startup development and we have
            designed our platform to meet your unique needs
          </p>
          <p
            className={cn(
              "text-xl font-bold text-center w-[646px]",
              kantumruy.className
            )}>
            With Blockonomy, you can build, collaborate and tokenize your
            startups and product in one simple platform. We got everything you
            need to take your startup to the next level.
          </p>
        </div>
        <div className="w-[477px]">
          <Image
            src="/assets/img-3.svg"
            alt=""
            width={447}
            height={463}
            priority
          />
        </div>
      </MaxWidthContainer>

      <MaxWidthContainer className="flex flex-col py-10">
        <div className="flex items-center gap-6">
          <h1 className="text-3xl font-bold">24h Amount</h1>
          <h1 className="text-3xl font-bold">Top Gainers</h1>
          <h1 className="text-3xl font-bold">Top Losers</h1>
        </div>
        <div className="border-2 border-primary w-full flex items-center gap-6 justify-between p-4"></div>
      </MaxWidthContainer>

      <MaxWidthContainer className="flex flex-col py-10">
        <div className="border-2 border-primary w-full flex items-center flex-col text-center justify-between rounded-2xl p-4">
          <h1 className="text-[70px] font-bold">JOIN BLOCKONOMY TODAY</h1>
          <p className="text-2xl">
            Join blockonomy as a validator, Developer,Partner or Trader
          </p>

          <Button className="mt-6 text-lg font-bold">Apply now</Button>
        </div>
      </MaxWidthContainer>

      <div className="flex flex-col pt-10 pb-2">
        <MaxWidthContainer className="mb-10">
          <h1 className="text-5xl font-bold underline">
            What makes Blockonomy so Powerful?
          </h1>
        </MaxWidthContainer>

        <div className="relative w-full h-full">
          <Image
            src={stars}
            alt=""
            className="w-full h-full object-cover object-center absolute bottom-0 inset-x-0"
          />
          <MaxWidthContainer className="pb-10 relative">
            <div className="flex flex-wrap justify-between gap-12 w-full">
              {services.map((service, _key) => (
                <div
                  key={_key}
                  className="border-2 border-primary text-center bg-black flex flex-col items-center justify-center p-10 w-[450px]">
                  <div className="w-16 h-16">
                    <Image
                      src={service.img}
                      alt={service.title}
                      width={64}
                      height={64}
                      priority
                    />
                  </div>
                  <h1 className="text-4xl font-bold mt-1 mb-2">
                    {service.title}
                  </h1>
                  <p className="font-regular text-lg">{service.description}</p>
                </div>
              ))}
            </div>
          </MaxWidthContainer>

          <MaxWidthContainer className="flex py-10 relative gap-10 items-center justify-between">
            <div className="flex flex-col items-center text-center space-y-6">
              <h1 className="text-5xl font-bold">Developer Programs</h1>
              <p className="text-xl max-w-prose font-bold">
                Developer Programs offer you the support and resources needed to
                take your project to the next level. Our program includes
                tokenization of products for people to invest and more.
              </p>
              <p className="text-xl max-w-prose font-bold">
                Add and enroll your startup to our tokenisation program, let
                people invest in your startup through tokenisation.
              </p>
              <Button>Enroll now</Button>
            </div>

            <Image src="/assets/space.svg" alt="" width={621} height={524} />
          </MaxWidthContainer>

          <div className="w-full mx-auto max-w-[880px] border-2 border-primary relative flex justify-between gap-6 p-6 bg-foreground/10">
            <div className="flex flex-col gap-2 items-center text-center">
              <h2 className="font-bold text-4xl h-10">Explore</h2>
              <p className="text-lg font-bold">Blockonomy wallet</p>
              <p className="text-lg font-bold">
                other wallet versality payment
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center text-center">
              <h2 className="font-bold text-4xl h-10">Build</h2>
              <p className="text-lg font-bold">Developers</p>
              <p className="text-lg font-bold">Whitepaper</p>
              <p className="text-lg font-bold">Sdks</p>
            </div>
            <div className="flex flex-col gap-2 items-center text-center">
              <h2 className="font-bold text-4xl h-10"></h2>
              <p className="text-lg font-bold">Privacy Policy</p>
              <p className="text-lg font-bold">Terms of use</p>
              <p className="text-lg font-bold">Careers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
