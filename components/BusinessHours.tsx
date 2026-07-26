import { Clock } from "lucide-react";
import { businessHours } from "@/components/site-data";

export default function BusinessHours() {
  return (
    <div className="rounded-lg border border-clinic-100 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-clinic-50 text-clinic-700">
          <Clock className="h-5 w-5" aria-hidden="true" />
        </span>
        <h2 className="text-xl font-bold text-clinic-900">Business Hours</h2>
      </div>
      <div className="mt-5 divide-y divide-slate-100">
        {businessHours.map((item) => (
          <div key={item.day} className="flex justify-between gap-5 py-3 text-sm">
            <span className="font-semibold text-slate-700">{item.day}</span>
            <span className="text-slate-600">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
