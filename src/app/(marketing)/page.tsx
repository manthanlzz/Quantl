import { AnimationContainer, MaxWidthWrapper, PricingCards } from "@/components";
import { BentoCard, BentoGrid, CARDS } from "@/components/ui/bento-grid";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { COMPANIES, PROCESS } from "@/utils";
import { REVIEWS } from "@/utils/constants/misc";
import { currentUser } from "@clerk/nextjs/server";
import { ArrowRightIcon, CreditCardIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HomePage = async () => {
  const user = await currentUser();

  return (
    <div className="overflow-x-hidden scrollbar-hide size-full">
      {/* Hero Section */}
     <MaxWidthWrapper className="!px-4 !mx-0 max-w-full relative">
  {/* Spline iframe background */}
  <div
    className="fixed top-0 left-0 w-full h-screen -z-20 pointer-events-none"
    aria-hidden="true"
  >
    <iframe
      src="https://my.spline.design/retrofuturismbganimation-YLjSIKr3I4v5gpEcWSbTLbDl/"
      frameBorder="0"
      width="100%"
      height="100%"
      className="w-full h-full"
      allow="fullscreen"
    />
  </div>

  {/* Hero content container */}
  <AnimationContainer className="relative w-full min-h-screen flex items-start justify-start pt-[var(--nav-height)]">
    <div className="absolute top-[60%] left-4 text-left max-w-xl transform -translate-y-1/2 pb-24 m-0">
      <h1 className="text-foreground py-2 text-4xl sm:text-5xl md:text-6xl font-medium tracking-normal leading-tight font-heading">
        Hyper-Focused Links for Data-Driven {" "}
<span className="text-white sm:text-transparent sm:bg-gradient-to-r sm:from-red-500 sm:to-red-900 sm:bg-clip-text inline-block">
 Teams
</span>






      </h1>
      <p className="mt-4 text-base sm:text-lg text-muted-foreground">
        Effortlessly streamline your link management with Quantl.
        <br className="hidden sm:block" />
        <span className="hidden sm:block">
          Shorten, track, and organize all your links in one place.
        </span>
      </p>
      <div className="mt-6 flex gap-4">
        <Button asChild>
          <Link href={user ? "/dashboard" : "/auth/sign-in"} className="flex items-center">
            Start creating for free
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  </AnimationContainer>
</MaxWidthWrapper>



       <div className="max-w max-h bg-black">
      {/* Dashboard Image - Appears After Scroll */}
   <MaxWidthWrapper>
 <AnimationContainer
  delay={0.2}
  className="relative pt-[20vh] md:pt-[40vh] pb-20 md:py-32 px-2 bg-transparent w-full"
>

    {/* Shared stacking context */}
    <div className="relative w-full">

      {/* Glow behind */}
      <div
        className="absolute left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-red-500 to-red-900 opacity-30 animate-image-glow blur-[5rem]"
        style={{
          top: "15%",
          width: "80%",
          height: "40%",
          zIndex: 0,
          filter: "blur(5rem)",
        }}
      ></div>

      {/* Dashboard container */}
      <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-red-800/30 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl relative z-10">
        <BorderBeam
          size={250}
          duration={12}
          delay={9}
          className="bg-gradient-to-r from-red-500 to-red-900"
        />

        <Image
          src="/assets/dashboard-dark.svg"
          alt="Dashboard"
          width={1200}
          height={1200}
          quality={100}
          className="rounded-md lg:rounded-xl bg-foreground/10 ring-1 ring-border"
        />

        {/* Bottom gradients */}
        <div className="absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-background z-20"></div>
        <div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-background z-30"></div>
      </div>
    </div>
  </AnimationContainer>
</MaxWidthWrapper>






            {/* Companies Section */}
            <MaxWidthWrapper>
                <AnimationContainer delay={0.4}>
                    <div className="py-14">
                        <div className="mx-auto px-4 md:px-8">
                            <h2 className="text-center text-sm font-medium font-heading text-neutral-400 uppercase">
                                Trusted by the best in the industry
                            </h2>
                            <div className="mt-8">
                                <ul className="flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-x-16 justify-center">
                                    {COMPANIES.map((company) => (
                                        <li key={company.name}>
                                            <Image
                                                src={company.logo}
                                                alt={company.name}
                                                width={80}
                                                height={80}
                                                quality={100}
                                                className="w-28 h-auto"
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>

            {/* Features Section */}
            <MaxWidthWrapper className="pt-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col w-full items-center lg:items-center justify-center py-8">
                        <MagicBadge title="Features" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            Manage Links Like a Pro
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                            Quantl is a powerful link management tool that helps you shorten, track, and organize all your links in one place.
                        </p>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.2}>
                    <BentoGrid className="py-8">
                        {CARDS.map((feature, idx) => (
                            <BentoCard key={idx} {...feature} />
                        ))}
                    </BentoGrid>
                </AnimationContainer>
            </MaxWidthWrapper>

            {/* Process Section */}
            <MaxWidthWrapper className="py-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title="The Process" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            Effortless link management in 3 steps
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                            Follow these simple steps to optimize, organize, and share your links with ease.
                        </p>
                    </div>
                </AnimationContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-8 gap-4 md:gap-8">
                    {PROCESS.map((process, id) => (
                        <AnimationContainer delay={0.2 * id} key={id}>
                            <MagicCard className="group md:py-8">
                                <div className="flex flex-col items-start justify-center w-full">
                                    <process.icon strokeWidth={1.5} className="w-10 h-10 text-foreground" />
                                    <div className="flex flex-col relative items-start">
                                        <span className="absolute -top-6 right-0 border-2 border-border text-foreground font-medium text-2xl rounded-full w-12 h-12 flex items-center justify-center pt-0.5">
                                            {id + 1}
                                        </span>
                                        <h3 className="text-base mt-6 font-medium text-foreground">
                                            {process.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            {process.description}
                                        </p>
                                    </div>
                                </div>
                            </MagicCard>
                        </AnimationContainer>
                    ))}
                </div>
            </MaxWidthWrapper>

            {/* Pricing Section */}
            <MaxWidthWrapper className="py-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title="Simple Pricing" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            Choose a plan that works for you
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                            Get started with Quantl today and enjoy more features with our pro plans.
                        </p>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.2}>
                    <PricingCards />
                </AnimationContainer>
                <AnimationContainer delay={0.3}>
                    <div className="flex flex-wrap items-start md:items-center justify-center lg:justify-evenly gap-6 mt-12 max-w-5xl mx-auto w-full">
                        <div className="flex items-center gap-2">
                            <CreditCardIcon className="w-5 h-5 text-foreground" />
                            <span className="text-muted-foreground">
                                No credit card required
                            </span>
                        </div>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>

            {/* Reviews Section */}
            <MaxWidthWrapper className="py-10">
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
                        <MagicBadge title="Our Customers" />
                        <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                            What our users are saying
                        </h2>
                        <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                            Here&apos;s what some of our users have to say about Quantl.
                        </p>
                    </div>
                </AnimationContainer>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start gap-4 md:gap-8 py-10">
                    <div className="flex flex-col items-start h-min gap-6">
                        {REVIEWS.slice(0, 3).map((review, index) => (
                            <AnimationContainer delay={0.2 * index} key={index}>
                                <MagicCard key={index} className="md:p-0">
                                    <Card className="flex flex-col w-full border-none h-min">
                                        <CardHeader className="space-y-0">
                                            <CardTitle className="text-lg font-medium text-muted-foreground">
                                                {review.name}
                                            </CardTitle>
                                            <CardDescription>
                                                {review.username}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4 pb-4">
                                            <p className="text-muted-foreground">
                                                {review.review}
                                            </p>
                                        </CardContent>
                                        <CardFooter className="w-full space-x-1 mt-auto">
                                            {Array.from({ length: review.rating }, (_, i) => (
                                                <StarIcon key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                            ))}
                                        </CardFooter>
                                    </Card>
                                </MagicCard>
                            </AnimationContainer>
                        ))}
                    </div>
                    <div className="flex flex-col items-start h-min gap-6">
                        {REVIEWS.slice(3, 6).map((review, index) => (
                            <AnimationContainer delay={0.2 * index} key={index}>
                                <MagicCard key={index} className="md:p-0">
                                    <Card className="flex flex-col w-full border-none h-min">
                                        <CardHeader className="space-y-0">
                                            <CardTitle className="text-lg font-medium text-muted-foreground">
                                                {review.name}
                                            </CardTitle>
                                            <CardDescription>
                                                {review.username}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4 pb-4">
                                            <p className="text-muted-foreground">
                                                {review.review}
                                            </p>
                                        </CardContent>
                                        <CardFooter className="w-full space-x-1 mt-auto">
                                            {Array.from({ length: review.rating }, (_, i) => (
                                                <StarIcon key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                            ))}
                                        </CardFooter>
                                    </Card>
                                </MagicCard>
                            </AnimationContainer>
                        ))}
                    </div>
                    <div className="flex flex-col items-start h-min gap-6">
                        {REVIEWS.slice(6, 9).map((review, index) => (
                            <AnimationContainer delay={0.2 * index} key={index}>
                                <MagicCard key={index} className="md:p-0">
                                    <Card className="flex flex-col w-full border-none h-min">
                                        <CardHeader className="space-y-0">
                                            <CardTitle className="text-lg font-medium text-muted-foreground">
                                                {review.name}
                                            </CardTitle>
                                            <CardDescription>
                                                {review.username}
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-4 pb-4">
                                            <p className="text-muted-foreground">
                                                {review.review}
                                            </p>
                                        </CardContent>
                                        <CardFooter className="w-full space-x-1 mt-auto">
                                            {Array.from({ length: review.rating }, (_, i) => (
                                                <StarIcon key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                            ))}
                                        </CardFooter>
                                    </Card>
                                </MagicCard>
                            </AnimationContainer>
                        ))}
                    </div>
                </div>
            </MaxWidthWrapper>

            {/* CTA Section */}
            <MaxWidthWrapper className="mt-20 max-w-[100vw] overflow-x-hidden scrollbar-hide">
                <AnimationContainer delay={0.1}>
                    <LampContainer>
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="bg-gradient-to-b from-neutral-200 to-neutral-400 py-4 bg-clip-text text-center text-4xl md:text-7xl !leading-[1.15] font-medium font-heading tracking-tight text-transparent mt-8">
                                Step into the future of link management
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                                Experience the cutting-edge solution that transforms how you handle your links. Elevate your online presence with our next-gen platform.
                            </p>
                            <div className="mt-6">
                                <Button>
                                    Get started for free
                                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </div>
                    </LampContainer>
                </AnimationContainer>
            </MaxWidthWrapper>
             </div>
        </div>
    )
};

export default HomePage
