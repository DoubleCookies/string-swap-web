import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ReplaceText from "./textModules/ReplaceText";
import AddPrefix from "./textModules/AddPrefix";
import FileNames from "./textModules/FileNames";
import NavboxGenerator from "./textModules/NavboxGenerator";
import QuoteReplacement from "./textModules/QuoteReplacement";
import GalleryGenerator from "./textModules/GalleryGenerator";
import React from "react";
import { useTranslation } from "react-i18next";

function ComponentTabs() {
  const { t } = useTranslation(['translation']);

  return (
    <Tabs>
      <TabList>
        <Tab>{t("replaceText")}</Tab>
        <Tab>{t("addPrefix")}</Tab>
        <Tab>{t("fileNames")}</Tab>
        <Tab>{t("quoteReplacement")}</Tab>
        <Tab>{t("navboxGenerator")}</Tab>
        <Tab>{t("galleryGenerator")}</Tab>
      </TabList>
      <TabPanel>
        <ReplaceText description={t("replaceTextInfo")}/>
      </TabPanel>
      <TabPanel>
        <AddPrefix description={t("addPrefixInfo")}/>
      </TabPanel>
      <TabPanel>
        <FileNames description={t("fileNamesInfo")}/>
      </TabPanel>
      <TabPanel>
        <QuoteReplacement description={t("quoteReplacementInfo")}/>
      </TabPanel>
      <TabPanel>
        <NavboxGenerator description={t("navboxGeneratorInfo")}/>
      </TabPanel>
      <TabPanel>
        <GalleryGenerator description={t("galleryGeneratorInfo")}/>
      </TabPanel>
    </Tabs>
  );
}

export default ComponentTabs;