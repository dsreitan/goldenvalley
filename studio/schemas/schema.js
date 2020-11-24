// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./blockContent";
import productGroup from "./productGroup";
import productVariant from "./productVariant";
import learningPath from "./learningPath";
import topicGroup from "./topicGroup";
import topic from "./topic";
import learningModule from "./learningModule";
import activity from "./activity";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    productGroup,
    productVariant,
    learningPath,
    //topicGroup,
    topic,
    learningModule,
    activity,
    blockContent,
  ]),
});
