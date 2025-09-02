import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import type { ContactFormValues } from '@/app/contact/actions';

export function ContactFormEmail({
  fullName,
  email,
  company,
  phone,
  serviceInterest,
  message,
}: ContactFormValues) {
  const previewText = `New enquiry from ${fullName} about ${serviceInterest}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New Enquiry from your Website</Heading>
          <Text style={paragraph}>
            You have received a new message through the contact form on the Synabl website.
          </Text>
          <Hr style={hr} />

          <Section style={section}>
            <Heading as="h2" style={subHeading}>
              Contact Details
            </Heading>
            <Text style={item}>
              <strong>Full Name:</strong> {fullName}
            </Text>
            <Text style={item}>
              <strong>Email:</strong> {email}
            </Text>
            {company && (
              <Text style={item}>
                <strong>Company:</strong> {company}
              </Text>
            )}
            {phone && (
              <Text style={item}>
                <strong>Phone:</strong> {phone}
              </Text>
            )}
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Heading as="h2" style={subHeading}>
              Message Details
            </Heading>
            <Text style={item}>
              <strong>Service Interest:</strong> {serviceInterest}
            </Text>
            <Text style={messageBox}>
              <strong style={messageLabel}>Message:</strong>
              <br />
              {message}
            </Text>
          </Section>
          
          <Hr style={hr} />
          
          <Text style={footer}>
            This email was sent from the contact form on synabl.com
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  border: '1px solid #f0f0f0',
  borderRadius: '4px',
};

const heading = {
  fontSize: '24px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#484848',
  textAlign: 'center' as const,
};

const subHeading = {
  fontSize: '18px',
  lineHeight: '1.3',
  fontWeight: '600',
  color: '#484848',
  margin: '0 0 16px',
}

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.4',
  color: '#5e5e5e',
  padding: '0 20px',
  textAlign: 'center' as const,
};

const section = {
  padding: '0 20px',
};

const item = {
  fontSize: '14px',
  lineHeight: '1.4',
  color: '#3c4043',
  margin: '0 0 10px',
};

const messageBox = {
  ...item,
  padding: '12px',
  backgroundColor: '#f8f9fa',
  borderRadius: '4px',
  border: '1px solid #e9ecef',
}

const messageLabel = {
  display: 'block',
  marginBottom: '8px',
  color: '#202124',
}

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
  padding: '0 20px',
};
