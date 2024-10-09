/* eslint-disable no-undef */
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  // eslint-disable-next-line no-undef
  projectId: 'ae16yqia',
  dataset: 'production',
  apiVersion: '2024-02-01',
  useCdn: true,
  token: 'skZinTw5ERImPG67rS3QFswkgIYxK8q38w26ycnUv8vdoxe43j62SI8bcSbzbgHuOIzzpnnOo8xlqgBbqE4ktp2eBAgUJMT1WkyrCDha5nTfStUT3BUC4bL15KVcSxs2wOR45CDdzwPmjYL6RmxAT3vVcpXw8sv0M8nwz959xiyEDlFSiuwQ',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);