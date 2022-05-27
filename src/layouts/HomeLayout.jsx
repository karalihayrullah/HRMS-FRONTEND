import React from "react";
import HighlightedContent from "./HighlightedContent";
import ViewAllJobPostingsByPostingDate from "./ViewAllJobPostingsDate";
import { Divider, Icon } from "semantic-ui-react";

export default function HomeLayout() {
  return (
    <div>
      <HighlightedContent />

      <Divider horizontal>
        <Icon name="bell outline" /> Son Paylaşılan İş İlanları
      </Divider>
      <br />
      <br />
      
      <ViewAllJobPostingsByPostingDate />
    </div>
  );
}