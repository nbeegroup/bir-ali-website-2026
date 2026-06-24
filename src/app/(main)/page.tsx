import { HomePage } from "@/components/site";
import { baseURL, meta } from "@/resources/seo";
import { Schema } from "@once-ui-system/core";

export default function Home() {
  return (
    <>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={meta.home.title}
        description={meta.home.description}
        path={meta.home.path}
      />
      <HomePage />
    </>
  );
}
