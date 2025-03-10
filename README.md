### This project is a WIP

*Project Overview:*
The Filecoin Ecosystem lacks sufficient _batch transaction_ tooling, which is crucial for efficiently running ecosystem programs and for sending FIL to a recipient's preferred wallet address. SendFIL solves this by enabling the following transaction types:

1. Single-Signer Wallet (f1) as the sender to one or multiple or a _mix of multiple_ f1, f2, f4, or 0x addresses.
2. Multi-Signer Wallet (f2) as the sender to one or multiple or a _mix of multiple_ f1, f2, f4, or 0x addresses.

With this functionality, a FIL Sender can simply send FIL to a group users' _preferred_ addresses via a straightforward UI or batch transaction template.

----



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
