import dynamic from "next/dynamic";

const BlockEditor = dynamic(
  () => import("@/components/block-editor/block-editor"),
  {
    ssr: false,
  },
);

export default function Write() {
  return (
    <main>
      <p className="text-red-600">write</p>
      <BlockEditor />
    </main>
  );
}
