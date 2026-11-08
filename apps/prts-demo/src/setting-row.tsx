import type { SettingRowProps } from "@/types";

export function SettingRow({ label, note, children }: SettingRowProps) {
  return (
    <div className="setting-row">
      <div className="flex flex-col items-start">
        <span className="setting-row__label">{label}</span>
        {note !== null && <span className="setting-row__note">*{note}</span>}
      </div>
      <div className="flex min-h-[46px] items-center">{children}</div>
    </div>
  );
}
