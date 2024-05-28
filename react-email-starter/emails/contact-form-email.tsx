import React from "react"
import { 
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
}

export default function ContactFormEmail({ message, senderEmail }: ContactFormEmailProps) {
  return (
    <Html>
        <Head />
        <Preview>Nouveau message de votre application web</Preview>
        <Tailwind>
            <Body className="bg-gray-100 text-black">
                <Container>
                    <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                        <Heading className="leading-tight text-2xl">
                            Vous avez reçu le message suivant du formulaire de contact
                        </Heading>
                        <Text>{message}</Text>
                        <Hr />
                        <Text>L'e-mail de l'expéditeur est: {senderEmail}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}