import CmsPage from "./CmsPage";
import CmsPageSection from "./CmsPageSection";
import CmsActivityLog from "./CmsActivityLog";

/**
 * ✅ DEFINE ASSOCIATIONS ONCE — HERE ONLY
 */

CmsPage.hasMany(CmsPageSection, {
  foreignKey: "page_uid",
  sourceKey: "page_uid",
  as: "sections",
});

CmsPageSection.belongsTo(CmsPage, {
  foreignKey: "page_uid",
  targetKey: "page_uid",
  as: "page",
});

export {
  CmsPage,
  CmsPageSection,
  CmsActivityLog,
};
