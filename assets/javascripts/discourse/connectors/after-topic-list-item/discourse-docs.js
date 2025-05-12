import { slotContenders } from "discourse/plugins/discourse-docs/discourse/components/ad-slot";

export default {
  shouldRender(args, component) {
    return (
      args.index &&
      slotContenders(
        component.site,
        component.siteSettings,
        "topic-list-between",
        args.index
      ).length > 0
    );
  },
};
