import React from "react";
import HighlightedContent from "./HighlightedContent";
import ViewAllJobPostingsByPostingDate from "./ViewAllJobPostingsDate";
import { Divider, Icon } from "semantic-ui-react";
import JobPostingList from "../pages/JobPostingList";

export default function HomeLayout() {
  return (
    <div>
      <HighlightedContent />

      <Divider horizontal>
        <Icon name="bell outline" /> Son Paylaşılan İş İlanları
      </Divider>
      <br />
      <br />
      <JobPostingList type="recently" itemsPerRow="3" />
      <ViewAllJobPostingsByPostingDate />
    </div>
  );
}