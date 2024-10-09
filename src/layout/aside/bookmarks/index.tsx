'use client';

import { Tab, Tabs, TabsList, TabPanels, TabPanel } from '@/components/tabs';

export default function Bookmarks() {
    return (
        <Tabs>
            <TabsList>
                <Tab>All</Tab>
                <Tab>bookmarked</Tab>
            </TabsList>
            <TabPanels>
                <TabPanel>All cards</TabPanel>
                <TabPanel>Bookmarkcard</TabPanel>
            </TabPanels>
        </Tabs>
    );
}
