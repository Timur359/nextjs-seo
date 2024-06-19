import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404! Страница не найдена",
};

export default function NotFoundPage() {
  return (
    <h1 className="text-2xl fond-bold text-center mt-16">
      404! Страница не найдена
    </h1>
  );
}
