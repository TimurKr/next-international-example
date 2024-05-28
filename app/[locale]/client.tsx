"use client";

import { useI18n } from "../../locales/client";
import { useSearchParams } from "next/navigation";

export default function Client() {
  const t = useI18n();
  const searchParams = useSearchParams();
  return (
    <p>
      From client: {t("hello")} {searchParams.get("hello")}
    </p>
  );
}
