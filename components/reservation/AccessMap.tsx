"use client";

export default function AccessMap() {
    return (
        <div className="w-full h-full min-h-[400px] bg-stone-50 border border-stone-200 relative group overflow-hidden">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1596.1664166687007!2d137.2185566!3d36.6343588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff791aaa3212871%3A0xe54904128f119053!2sTrattoria%20Sacchi!5e0!3m2!1sja!2sjp!4v1703723456789!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full opacity-100 transition-opacity duration-500"
            />
        </div>
    );
}
