"use client";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Header } from "./header";
import { BackButton } from "./backbutton";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md text-black">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardBody>
        {children}
      </CardBody>
      <CardFooter>
        <BackButton
          label={backButtonLabel}
          href={backButtonHref}
        />
      </CardFooter>
    </Card>
  );
};
