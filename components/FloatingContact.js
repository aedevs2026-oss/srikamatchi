import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <CallButton label="Call" className="shadow-lg" />
      <WhatsAppButton label="WhatsApp" className="shadow-lg" />
    </div>
  );
}
