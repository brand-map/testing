import { createFileRoute } from "@tanstack/react-router";

import { LocalStore } from "@brand-map/atlas/views/store";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main>
      <LocalStore />
    </main>
  );
}
