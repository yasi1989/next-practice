import MailForm from "@/components/MailForm/MailForm";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center p-24">
      <h2 className="text-2xl font-semibold">お問い合わせフォーム</h2>
      <MailForm />
    </main>
  );
}
