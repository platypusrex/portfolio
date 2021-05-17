/* eslint-disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
}

export interface Query {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
  practicePage?: Maybe<PracticePage>;
  practicePageCollection?: Maybe<PracticePageCollection>;
  resumeSection?: Maybe<ResumeSection>;
  resumeSectionCollection?: Maybe<ResumeSectionCollection>;
  resumeSectionContent?: Maybe<ResumeSectionContent>;
  resumeSectionContentCollection?: Maybe<ResumeSectionContentCollection>;
  navLink?: Maybe<NavLink>;
  navLinkCollection?: Maybe<NavLinkCollection>;
  contactInfo?: Maybe<ContactInfo>;
  contactInfoCollection?: Maybe<ContactInfoCollection>;
  socialLink?: Maybe<SocialLink>;
  socialLinkCollection?: Maybe<SocialLinkCollection>;
  pageHeader?: Maybe<PageHeader>;
  pageHeaderCollection?: Maybe<PageHeaderCollection>;
}

export interface QueryAssetArgs {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface QueryAssetCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<AssetFilter>;
  order?: Maybe<Array<Maybe<AssetOrder>>>;
}

export interface QueryPageArgs {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface QueryPageCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<PageFilter>;
  order?: Maybe<Array<Maybe<PageOrder>>>;
}

export interface QueryPracticePageArgs {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface QueryPracticePageCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<PracticePageFilter>;
  order?: Maybe<Array<Maybe<PracticePageOrder>>>;
}

export interface QueryResumeSectionArgs {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface QueryResumeSectionCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<ResumeSectionFilter>;
  order?: Maybe<Array<Maybe<ResumeSectionOrder>>>;
}

export interface QueryResumeSectionContentArgs {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface QueryResumeSectionContentCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<ResumeSectionContentFilter>;
  order?: Maybe<Array<Maybe<ResumeSectionContentOrder>>>;
}

export interface QueryNavLinkArgs {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface QueryNavLinkCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<NavLinkFilter>;
  order?: Maybe<Array<Maybe<NavLinkOrder>>>;
}

export interface QueryContactInfoArgs {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface QueryContactInfoCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<ContactInfoFilter>;
  order?: Maybe<Array<Maybe<ContactInfoOrder>>>;
}

export interface QuerySocialLinkArgs {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface QuerySocialLinkCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<SocialLinkFilter>;
  order?: Maybe<Array<Maybe<SocialLinkOrder>>>;
}

export interface QueryPageHeaderArgs {
  id: Scalars['String'];
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface QueryPageHeaderCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
  where?: Maybe<PageHeaderFilter>;
  order?: Maybe<Array<Maybe<PageHeaderOrder>>>;
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface Asset {
  __typename?: 'Asset';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetUrlArgs {
  transform?: Maybe<ImageTransformOptions>;
}

/** Represents a binary file in a space. An asset can be any file type. */
export interface AssetLinkedFromArgs {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
}

export interface Sys {
  __typename?: 'Sys';
  id: Scalars['String'];
  spaceId: Scalars['String'];
  environmentId: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
}

export interface ContentfulMetadata {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
}

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export interface ContentfulTag {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
}

export interface ImageTransformOptions {
  /** Desired width in pixels. Defaults to the original image width. */
  width?: Maybe<Scalars['Dimension']>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: Maybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: Maybe<Scalars['Quality']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: Maybe<Scalars['Int']>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: Maybe<ImageResizeStrategy>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: Maybe<ImageResizeFocus>;
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: Maybe<Scalars['HexColor']>;
  /** Desired image format. Defaults to the original image format. */
  format?: Maybe<ImageFormat>;
}

export enum ImageResizeStrategy {
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB',
}

export enum ImageResizeFocus {
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
}

export enum ImageFormat {
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP',
}

export interface AssetLinkingCollections {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
  practicePageCollection?: Maybe<PracticePageCollection>;
}

export interface AssetLinkingCollectionsEntryCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface AssetLinkingCollectionsPageCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface AssetLinkingCollectionsPracticePageCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface EntryCollection {
  __typename?: 'EntryCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Entry>>;
}

export interface Entry {
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
}

export interface PageCollection {
  __typename?: 'PageCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Page>>;
}

/** Portfolio site page. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/page) */
export interface Page extends Entry {
  __typename?: 'Page';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  pageHeader?: Maybe<PageHeader>;
  hero?: Maybe<Asset>;
  heroMobile?: Maybe<Asset>;
  navLinksCollection?: Maybe<PageNavLinksCollection>;
  socialLinksCollection?: Maybe<PageSocialLinksCollection>;
  contactInfo?: Maybe<ContactInfo>;
  content?: Maybe<PageContent>;
  resumeSectionsCollection?: Maybe<PageResumeSectionsCollection>;
}

/** Portfolio site page. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/page) */
export interface PageLinkedFromArgs {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
}

/** Portfolio site page. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/page) */
export interface PageNameArgs {
  locale?: Maybe<Scalars['String']>;
}

/** Portfolio site page. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/page) */
export interface PagePageHeaderArgs {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

/** Portfolio site page. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/page) */
export interface PageHeroArgs {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

/** Portfolio site page. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/page) */
export interface PageHeroMobileArgs {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

/** Portfolio site page. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/page) */
export interface PageNavLinksCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

/** Portfolio site page. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/page) */
export interface PageSocialLinksCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

/** Portfolio site page. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/page) */
export interface PageContactInfoArgs {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

/** Portfolio site page. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/page) */
export interface PageContentArgs {
  locale?: Maybe<Scalars['String']>;
}

/** Portfolio site page. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/page) */
export interface PageResumeSectionsCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface PageLinkingCollections {
  __typename?: 'PageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
}

export interface PageLinkingCollectionsEntryCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

/** The main heading and description for a page. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/pageHeader) */
export interface PageHeader extends Entry {
  __typename?: 'PageHeader';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageHeaderLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<PageHeaderDescription>;
}

/** The main heading and description for a page. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/pageHeader) */
export interface PageHeaderLinkedFromArgs {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
}

/** The main heading and description for a page. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/pageHeader) */
export interface PageHeaderNameArgs {
  locale?: Maybe<Scalars['String']>;
}

/** The main heading and description for a page. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/pageHeader) */
export interface PageHeaderTitleArgs {
  locale?: Maybe<Scalars['String']>;
}

/** The main heading and description for a page. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/pageHeader) */
export interface PageHeaderDescriptionArgs {
  locale?: Maybe<Scalars['String']>;
}

export interface PageHeaderLinkingCollections {
  __typename?: 'PageHeaderLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
  practicePageCollection?: Maybe<PracticePageCollection>;
}

export interface PageHeaderLinkingCollectionsEntryCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface PageHeaderLinkingCollectionsPageCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface PageHeaderLinkingCollectionsPracticePageCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface PracticePageCollection {
  __typename?: 'PracticePageCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<PracticePage>>;
}

/** Portfolio site page. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/practicePage) */
export interface PracticePage extends Entry {
  __typename?: 'PracticePage';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PracticePageLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  pageHeader?: Maybe<PageHeader>;
  content?: Maybe<PracticePageContent>;
  navLinksCollection?: Maybe<PracticePageNavLinksCollection>;
  socialLinksCollection?: Maybe<PracticePageSocialLinksCollection>;
  contactInfo?: Maybe<ContactInfo>;
  heroMobile?: Maybe<Asset>;
  hero?: Maybe<Asset>;
  resumeSectionsCollection?: Maybe<PracticePageResumeSectionsCollection>;
}

/** Portfolio site page. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/practicePage) */
export interface PracticePageLinkedFromArgs {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
}

/** Portfolio site page. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/practicePage) */
export interface PracticePageNameArgs {
  locale?: Maybe<Scalars['String']>;
}

/** Portfolio site page. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/practicePage) */
export interface PracticePagePageHeaderArgs {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

/** Portfolio site page. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/practicePage) */
export interface PracticePageContentArgs {
  locale?: Maybe<Scalars['String']>;
}

/** Portfolio site page. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/practicePage) */
export interface PracticePageNavLinksCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

/** Portfolio site page. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/practicePage) */
export interface PracticePageSocialLinksCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

/** Portfolio site page. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/practicePage) */
export interface PracticePageContactInfoArgs {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

/** Portfolio site page. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/practicePage) */
export interface PracticePageHeroMobileArgs {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

/** Portfolio site page. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/practicePage) */
export interface PracticePageHeroArgs {
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

/** Portfolio site page. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/practicePage) */
export interface PracticePageResumeSectionsCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface PracticePageLinkingCollections {
  __typename?: 'PracticePageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
}

export interface PracticePageLinkingCollectionsEntryCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface PracticePageContent {
  __typename?: 'PracticePageContent';
  json: Scalars['JSON'];
  links: PracticePageContentLinks;
}

export interface PracticePageContentLinks {
  __typename?: 'PracticePageContentLinks';
  entries: PracticePageContentEntries;
  assets: PracticePageContentAssets;
}

export interface PracticePageContentEntries {
  __typename?: 'PracticePageContentEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
}

export interface PracticePageContentAssets {
  __typename?: 'PracticePageContentAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
}

export interface PracticePageNavLinksCollection {
  __typename?: 'PracticePageNavLinksCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<NavLink>>;
}

/** Primary site navigation link. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/navLink) */
export interface NavLink extends Entry {
  __typename?: 'NavLink';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<NavLinkLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
}

/** Primary site navigation link. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/navLink) */
export interface NavLinkLinkedFromArgs {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
}

/** Primary site navigation link. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/navLink) */
export interface NavLinkNameArgs {
  locale?: Maybe<Scalars['String']>;
}

/** Primary site navigation link. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/navLink) */
export interface NavLinkTitleArgs {
  locale?: Maybe<Scalars['String']>;
}

/** Primary site navigation link. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/navLink) */
export interface NavLinkDescriptionArgs {
  locale?: Maybe<Scalars['String']>;
}

/** Primary site navigation link. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/navLink) */
export interface NavLinkHrefArgs {
  locale?: Maybe<Scalars['String']>;
}

/** Primary site navigation link. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/navLink) */
export interface NavLinkIconArgs {
  locale?: Maybe<Scalars['String']>;
}

export interface NavLinkLinkingCollections {
  __typename?: 'NavLinkLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
  practicePageCollection?: Maybe<PracticePageCollection>;
}

export interface NavLinkLinkingCollectionsEntryCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface NavLinkLinkingCollectionsPageCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface NavLinkLinkingCollectionsPracticePageCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface PracticePageSocialLinksCollection {
  __typename?: 'PracticePageSocialLinksCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<SocialLink>>;
}

/** Social button link with related iconography. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/socialLink) */
export interface SocialLink extends Entry {
  __typename?: 'SocialLink';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<SocialLinkLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
}

/** Social button link with related iconography. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/socialLink) */
export interface SocialLinkLinkedFromArgs {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
}

/** Social button link with related iconography. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/socialLink) */
export interface SocialLinkNameArgs {
  locale?: Maybe<Scalars['String']>;
}

/** Social button link with related iconography. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/socialLink) */
export interface SocialLinkIconArgs {
  locale?: Maybe<Scalars['String']>;
}

/** Social button link with related iconography. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/socialLink) */
export interface SocialLinkHrefArgs {
  locale?: Maybe<Scalars['String']>;
}

/** Social button link with related iconography. [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/socialLink) */
export interface SocialLinkTargetArgs {
  locale?: Maybe<Scalars['String']>;
}

export interface SocialLinkLinkingCollections {
  __typename?: 'SocialLinkLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
  practicePageCollection?: Maybe<PracticePageCollection>;
}

export interface SocialLinkLinkingCollectionsEntryCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface SocialLinkLinkingCollectionsPageCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface SocialLinkLinkingCollectionsPracticePageCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

/** Contact information (ie: name, city, number, ect). [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/contactInfo) */
export interface ContactInfo extends Entry {
  __typename?: 'ContactInfo';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ContactInfoLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
}

/** Contact information (ie: name, city, number, ect). [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/contactInfo) */
export interface ContactInfoLinkedFromArgs {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
}

/** Contact information (ie: name, city, number, ect). [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/contactInfo) */
export interface ContactInfoNameArgs {
  locale?: Maybe<Scalars['String']>;
}

/** Contact information (ie: name, city, number, ect). [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/contactInfo) */
export interface ContactInfoFullNameArgs {
  locale?: Maybe<Scalars['String']>;
}

/** Contact information (ie: name, city, number, ect). [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/contactInfo) */
export interface ContactInfoEmailArgs {
  locale?: Maybe<Scalars['String']>;
}

/** Contact information (ie: name, city, number, ect). [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/contactInfo) */
export interface ContactInfoPhoneArgs {
  locale?: Maybe<Scalars['String']>;
}

/** Contact information (ie: name, city, number, ect). [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/contactInfo) */
export interface ContactInfoCityArgs {
  locale?: Maybe<Scalars['String']>;
}

/** Contact information (ie: name, city, number, ect). [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/contactInfo) */
export interface ContactInfoStateArgs {
  locale?: Maybe<Scalars['String']>;
}

export interface ContactInfoLinkingCollections {
  __typename?: 'ContactInfoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
  practicePageCollection?: Maybe<PracticePageCollection>;
}

export interface ContactInfoLinkingCollectionsEntryCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface ContactInfoLinkingCollectionsPageCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface ContactInfoLinkingCollectionsPracticePageCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface PracticePageResumeSectionsCollection {
  __typename?: 'PracticePageResumeSectionsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<ResumeSection>>;
}

/** [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/resumeSection) */
export interface ResumeSection extends Entry {
  __typename?: 'ResumeSection';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ResumeSectionLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  contentCollection?: Maybe<ResumeSectionContentCollection>;
}

/** [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/resumeSection) */
export interface ResumeSectionLinkedFromArgs {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
}

/** [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/resumeSection) */
export interface ResumeSectionNameArgs {
  locale?: Maybe<Scalars['String']>;
}

/** [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/resumeSection) */
export interface ResumeSectionHeadingArgs {
  locale?: Maybe<Scalars['String']>;
}

/** [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/resumeSection) */
export interface ResumeSectionContentCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface ResumeSectionLinkingCollections {
  __typename?: 'ResumeSectionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
  practicePageCollection?: Maybe<PracticePageCollection>;
}

export interface ResumeSectionLinkingCollectionsEntryCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface ResumeSectionLinkingCollectionsPageCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface ResumeSectionLinkingCollectionsPracticePageCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface ResumeSectionContentCollection {
  __typename?: 'ResumeSectionContentCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<ResumeSectionContent>>;
}

/** [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/resumeSectionContent) */
export interface ResumeSectionContent extends Entry {
  __typename?: 'ResumeSectionContent';
  sys: Sys;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<ResumeSectionContentLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  subHeading?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  descriptionList?: Maybe<Array<Maybe<Scalars['String']>>>;
}

/** [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/resumeSectionContent) */
export interface ResumeSectionContentLinkedFromArgs {
  allowedLocales?: Maybe<Array<Maybe<Scalars['String']>>>;
}

/** [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/resumeSectionContent) */
export interface ResumeSectionContentNameArgs {
  locale?: Maybe<Scalars['String']>;
}

/** [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/resumeSectionContent) */
export interface ResumeSectionContentHeadingArgs {
  locale?: Maybe<Scalars['String']>;
}

/** [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/resumeSectionContent) */
export interface ResumeSectionContentSubHeadingArgs {
  locale?: Maybe<Scalars['String']>;
}

/** [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/resumeSectionContent) */
export interface ResumeSectionContentDescriptionArgs {
  locale?: Maybe<Scalars['String']>;
}

/** [See type definition](https://app.contentful.com/spaces/85rjnv4kkg6i/content_types/resumeSectionContent) */
export interface ResumeSectionContentDescriptionListArgs {
  locale?: Maybe<Scalars['String']>;
}

export interface ResumeSectionContentLinkingCollections {
  __typename?: 'ResumeSectionContentLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  resumeSectionCollection?: Maybe<ResumeSectionCollection>;
}

export interface ResumeSectionContentLinkingCollectionsEntryCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface ResumeSectionContentLinkingCollectionsResumeSectionCollectionArgs {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  preview?: Maybe<Scalars['Boolean']>;
  locale?: Maybe<Scalars['String']>;
}

export interface ResumeSectionCollection {
  __typename?: 'ResumeSectionCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<ResumeSection>>;
}

export interface PageHeaderDescription {
  __typename?: 'PageHeaderDescription';
  json: Scalars['JSON'];
  links: PageHeaderDescriptionLinks;
}

export interface PageHeaderDescriptionLinks {
  __typename?: 'PageHeaderDescriptionLinks';
  entries: PageHeaderDescriptionEntries;
  assets: PageHeaderDescriptionAssets;
}

export interface PageHeaderDescriptionEntries {
  __typename?: 'PageHeaderDescriptionEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
}

export interface PageHeaderDescriptionAssets {
  __typename?: 'PageHeaderDescriptionAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
}

export interface PageNavLinksCollection {
  __typename?: 'PageNavLinksCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<NavLink>>;
}

export interface PageSocialLinksCollection {
  __typename?: 'PageSocialLinksCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<SocialLink>>;
}

export interface PageContent {
  __typename?: 'PageContent';
  json: Scalars['JSON'];
  links: PageContentLinks;
}

export interface PageContentLinks {
  __typename?: 'PageContentLinks';
  entries: PageContentEntries;
  assets: PageContentAssets;
}

export interface PageContentEntries {
  __typename?: 'PageContentEntries';
  inline: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  block: Array<Maybe<Entry>>;
}

export interface PageContentAssets {
  __typename?: 'PageContentAssets';
  hyperlink: Array<Maybe<Asset>>;
  block: Array<Maybe<Asset>>;
}

export interface PageResumeSectionsCollection {
  __typename?: 'PageResumeSectionsCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<ResumeSection>>;
}

export interface AssetFilter {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  url_exists?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  url_not?: Maybe<Scalars['String']>;
  url_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  url_contains?: Maybe<Scalars['String']>;
  url_not_contains?: Maybe<Scalars['String']>;
  size_exists?: Maybe<Scalars['Boolean']>;
  size?: Maybe<Scalars['Int']>;
  size_not?: Maybe<Scalars['Int']>;
  size_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  size_gt?: Maybe<Scalars['Int']>;
  size_gte?: Maybe<Scalars['Int']>;
  size_lt?: Maybe<Scalars['Int']>;
  size_lte?: Maybe<Scalars['Int']>;
  contentType_exists?: Maybe<Scalars['Boolean']>;
  contentType?: Maybe<Scalars['String']>;
  contentType_not?: Maybe<Scalars['String']>;
  contentType_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentType_contains?: Maybe<Scalars['String']>;
  contentType_not_contains?: Maybe<Scalars['String']>;
  fileName_exists?: Maybe<Scalars['Boolean']>;
  fileName?: Maybe<Scalars['String']>;
  fileName_not?: Maybe<Scalars['String']>;
  fileName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fileName_contains?: Maybe<Scalars['String']>;
  fileName_not_contains?: Maybe<Scalars['String']>;
  width_exists?: Maybe<Scalars['Boolean']>;
  width?: Maybe<Scalars['Int']>;
  width_not?: Maybe<Scalars['Int']>;
  width_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  width_gt?: Maybe<Scalars['Int']>;
  width_gte?: Maybe<Scalars['Int']>;
  width_lt?: Maybe<Scalars['Int']>;
  width_lte?: Maybe<Scalars['Int']>;
  height_exists?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['Int']>;
  height_not?: Maybe<Scalars['Int']>;
  height_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  height_gt?: Maybe<Scalars['Int']>;
  height_gte?: Maybe<Scalars['Int']>;
  height_lt?: Maybe<Scalars['Int']>;
  height_lte?: Maybe<Scalars['Int']>;
  OR?: Maybe<Array<Maybe<AssetFilter>>>;
  AND?: Maybe<Array<Maybe<AssetFilter>>>;
}

export interface SysFilter {
  id_exists?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  id_not?: Maybe<Scalars['String']>;
  id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_contains?: Maybe<Scalars['String']>;
  id_not_contains?: Maybe<Scalars['String']>;
  publishedAt_exists?: Maybe<Scalars['Boolean']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedAt_not?: Maybe<Scalars['DateTime']>;
  publishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  publishedAt_gt?: Maybe<Scalars['DateTime']>;
  publishedAt_gte?: Maybe<Scalars['DateTime']>;
  publishedAt_lt?: Maybe<Scalars['DateTime']>;
  publishedAt_lte?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: Maybe<Scalars['Boolean']>;
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_not?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  firstPublishedAt_not_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  firstPublishedAt_gt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_lt?: Maybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: Maybe<Scalars['DateTime']>;
  publishedVersion_exists?: Maybe<Scalars['Boolean']>;
  publishedVersion?: Maybe<Scalars['Float']>;
  publishedVersion_not?: Maybe<Scalars['Float']>;
  publishedVersion_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  publishedVersion_not_in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  publishedVersion_gt?: Maybe<Scalars['Float']>;
  publishedVersion_gte?: Maybe<Scalars['Float']>;
  publishedVersion_lt?: Maybe<Scalars['Float']>;
  publishedVersion_lte?: Maybe<Scalars['Float']>;
}

export enum AssetOrder {
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface AssetCollection {
  __typename?: 'AssetCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<Asset>>;
}

export interface PageFilter {
  pageHeader?: Maybe<CfPageHeaderNestedFilter>;
  contactInfo?: Maybe<CfContactInfoNestedFilter>;
  sys?: Maybe<SysFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  pageHeader_exists?: Maybe<Scalars['Boolean']>;
  hero_exists?: Maybe<Scalars['Boolean']>;
  heroMobile_exists?: Maybe<Scalars['Boolean']>;
  navLinksCollection_exists?: Maybe<Scalars['Boolean']>;
  socialLinksCollection_exists?: Maybe<Scalars['Boolean']>;
  contactInfo_exists?: Maybe<Scalars['Boolean']>;
  content_exists?: Maybe<Scalars['Boolean']>;
  content_contains?: Maybe<Scalars['String']>;
  content_not_contains?: Maybe<Scalars['String']>;
  resumeSectionsCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<PageFilter>>>;
  AND?: Maybe<Array<Maybe<PageFilter>>>;
}

export interface CfPageHeaderNestedFilter {
  sys?: Maybe<SysFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CfPageHeaderNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfPageHeaderNestedFilter>>>;
}

export interface CfContactInfoNestedFilter {
  sys?: Maybe<SysFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  fullName_exists?: Maybe<Scalars['Boolean']>;
  fullName?: Maybe<Scalars['String']>;
  fullName_not?: Maybe<Scalars['String']>;
  fullName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fullName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fullName_contains?: Maybe<Scalars['String']>;
  fullName_not_contains?: Maybe<Scalars['String']>;
  email_exists?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  phone_exists?: Maybe<Scalars['Boolean']>;
  phone?: Maybe<Scalars['String']>;
  phone_not?: Maybe<Scalars['String']>;
  phone_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phone_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phone_contains?: Maybe<Scalars['String']>;
  phone_not_contains?: Maybe<Scalars['String']>;
  city_exists?: Maybe<Scalars['Boolean']>;
  city?: Maybe<Scalars['String']>;
  city_not?: Maybe<Scalars['String']>;
  city_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_contains?: Maybe<Scalars['String']>;
  city_not_contains?: Maybe<Scalars['String']>;
  state_exists?: Maybe<Scalars['Boolean']>;
  state?: Maybe<Scalars['String']>;
  state_not?: Maybe<Scalars['String']>;
  state_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  state_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  state_contains?: Maybe<Scalars['String']>;
  state_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<CfContactInfoNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfContactInfoNestedFilter>>>;
}

export enum PageOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface PracticePageFilter {
  pageHeader?: Maybe<CfPageHeaderNestedFilter>;
  contactInfo?: Maybe<CfContactInfoNestedFilter>;
  sys?: Maybe<SysFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  pageHeader_exists?: Maybe<Scalars['Boolean']>;
  content_exists?: Maybe<Scalars['Boolean']>;
  content_contains?: Maybe<Scalars['String']>;
  content_not_contains?: Maybe<Scalars['String']>;
  navLinksCollection_exists?: Maybe<Scalars['Boolean']>;
  socialLinksCollection_exists?: Maybe<Scalars['Boolean']>;
  contactInfo_exists?: Maybe<Scalars['Boolean']>;
  heroMobile_exists?: Maybe<Scalars['Boolean']>;
  hero_exists?: Maybe<Scalars['Boolean']>;
  resumeSectionsCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<PracticePageFilter>>>;
  AND?: Maybe<Array<Maybe<PracticePageFilter>>>;
}

export enum PracticePageOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface ResumeSectionFilter {
  sys?: Maybe<SysFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  heading_exists?: Maybe<Scalars['Boolean']>;
  heading?: Maybe<Scalars['String']>;
  heading_not?: Maybe<Scalars['String']>;
  heading_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heading_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heading_contains?: Maybe<Scalars['String']>;
  heading_not_contains?: Maybe<Scalars['String']>;
  contentCollection_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<Maybe<ResumeSectionFilter>>>;
  AND?: Maybe<Array<Maybe<ResumeSectionFilter>>>;
}

export enum ResumeSectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface ResumeSectionContentFilter {
  sys?: Maybe<SysFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  heading_exists?: Maybe<Scalars['Boolean']>;
  heading?: Maybe<Scalars['String']>;
  heading_not?: Maybe<Scalars['String']>;
  heading_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heading_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  heading_contains?: Maybe<Scalars['String']>;
  heading_not_contains?: Maybe<Scalars['String']>;
  subHeading_exists?: Maybe<Scalars['Boolean']>;
  subHeading?: Maybe<Scalars['String']>;
  subHeading_not?: Maybe<Scalars['String']>;
  subHeading_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  subHeading_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  subHeading_contains?: Maybe<Scalars['String']>;
  subHeading_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  descriptionList_exists?: Maybe<Scalars['Boolean']>;
  descriptionList_contains_all?: Maybe<Array<Maybe<Scalars['String']>>>;
  descriptionList_contains_some?: Maybe<Array<Maybe<Scalars['String']>>>;
  descriptionList_contains_none?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<Maybe<ResumeSectionContentFilter>>>;
  AND?: Maybe<Array<Maybe<ResumeSectionContentFilter>>>;
}

export enum ResumeSectionContentOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  SubHeadingAsc = 'subHeading_ASC',
  SubHeadingDesc = 'subHeading_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface NavLinkFilter {
  sys?: Maybe<SysFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  href_exists?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
  href_not?: Maybe<Scalars['String']>;
  href_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  href_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  href_contains?: Maybe<Scalars['String']>;
  href_not_contains?: Maybe<Scalars['String']>;
  icon_exists?: Maybe<Scalars['Boolean']>;
  icon?: Maybe<Scalars['String']>;
  icon_not?: Maybe<Scalars['String']>;
  icon_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  icon_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  icon_contains?: Maybe<Scalars['String']>;
  icon_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<NavLinkFilter>>>;
  AND?: Maybe<Array<Maybe<NavLinkFilter>>>;
}

export enum NavLinkOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface NavLinkCollection {
  __typename?: 'NavLinkCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<NavLink>>;
}

export interface ContactInfoFilter {
  sys?: Maybe<SysFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  fullName_exists?: Maybe<Scalars['Boolean']>;
  fullName?: Maybe<Scalars['String']>;
  fullName_not?: Maybe<Scalars['String']>;
  fullName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fullName_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fullName_contains?: Maybe<Scalars['String']>;
  fullName_not_contains?: Maybe<Scalars['String']>;
  email_exists?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  phone_exists?: Maybe<Scalars['Boolean']>;
  phone?: Maybe<Scalars['String']>;
  phone_not?: Maybe<Scalars['String']>;
  phone_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phone_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  phone_contains?: Maybe<Scalars['String']>;
  phone_not_contains?: Maybe<Scalars['String']>;
  city_exists?: Maybe<Scalars['Boolean']>;
  city?: Maybe<Scalars['String']>;
  city_not?: Maybe<Scalars['String']>;
  city_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_contains?: Maybe<Scalars['String']>;
  city_not_contains?: Maybe<Scalars['String']>;
  state_exists?: Maybe<Scalars['Boolean']>;
  state?: Maybe<Scalars['String']>;
  state_not?: Maybe<Scalars['String']>;
  state_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  state_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  state_contains?: Maybe<Scalars['String']>;
  state_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<ContactInfoFilter>>>;
  AND?: Maybe<Array<Maybe<ContactInfoFilter>>>;
}

export enum ContactInfoOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  FullNameAsc = 'fullName_ASC',
  FullNameDesc = 'fullName_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  StateAsc = 'state_ASC',
  StateDesc = 'state_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface ContactInfoCollection {
  __typename?: 'ContactInfoCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<ContactInfo>>;
}

export interface SocialLinkFilter {
  sys?: Maybe<SysFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  icon_exists?: Maybe<Scalars['Boolean']>;
  icon?: Maybe<Scalars['String']>;
  icon_not?: Maybe<Scalars['String']>;
  icon_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  icon_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  icon_contains?: Maybe<Scalars['String']>;
  icon_not_contains?: Maybe<Scalars['String']>;
  href_exists?: Maybe<Scalars['Boolean']>;
  href?: Maybe<Scalars['String']>;
  href_not?: Maybe<Scalars['String']>;
  href_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  href_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  href_contains?: Maybe<Scalars['String']>;
  href_not_contains?: Maybe<Scalars['String']>;
  target_exists?: Maybe<Scalars['Boolean']>;
  target?: Maybe<Scalars['String']>;
  target_not?: Maybe<Scalars['String']>;
  target_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  target_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  target_contains?: Maybe<Scalars['String']>;
  target_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<SocialLinkFilter>>>;
  AND?: Maybe<Array<Maybe<SocialLinkFilter>>>;
}

export enum SocialLinkOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  IconAsc = 'icon_ASC',
  IconDesc = 'icon_DESC',
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  TargetAsc = 'target_ASC',
  TargetDesc = 'target_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface SocialLinkCollection {
  __typename?: 'SocialLinkCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<SocialLink>>;
}

export interface PageHeaderFilter {
  sys?: Maybe<SysFilter>;
  name_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  title_exists?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  title_contains?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  description_exists?: Maybe<Scalars['Boolean']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<Maybe<PageHeaderFilter>>>;
  AND?: Maybe<Array<Maybe<PageHeaderFilter>>>;
}

export enum PageHeaderOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export interface PageHeaderCollection {
  __typename?: 'PageHeaderCollection';
  total: Scalars['Int'];
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  items: Array<Maybe<PageHeader>>;
}

export type ContactInfoFragment = { __typename?: 'ContactInfo' } & Pick<
  ContactInfo,
  'fullName' | 'email' | 'phone' | 'city' | 'state'
>;

export type HeroFragment = { __typename?: 'Asset' } & Pick<Asset, 'url' | 'description' | 'title'>;

export type NavLinkFragment = { __typename?: 'NavLink' } & Pick<
  NavLink,
  'title' | 'description' | 'icon' | 'href'
>;

export type PageFieldsFragment = { __typename?: 'Page' } & {
  pageHeader?: Maybe<{ __typename?: 'PageHeader' } & PageHeaderFragment>;
  content?: Maybe<{ __typename?: 'PageContent' } & Pick<PageContent, 'json'>>;
  navLinksCollection?: Maybe<
    { __typename?: 'PageNavLinksCollection' } & {
      items: Array<Maybe<{ __typename?: 'NavLink' } & NavLinkFragment>>;
    }
  >;
  hero?: Maybe<{ __typename?: 'Asset' } & HeroFragment>;
  heroMobile?: Maybe<{ __typename?: 'Asset' } & HeroFragment>;
  contactInfo?: Maybe<{ __typename?: 'ContactInfo' } & ContactInfoFragment>;
  socialLinksCollection?: Maybe<
    { __typename?: 'PageSocialLinksCollection' } & {
      items: Array<Maybe<{ __typename?: 'SocialLink' } & SocialLinkFragment>>;
    }
  >;
  resumeSectionsCollection?: Maybe<
    { __typename?: 'PageResumeSectionsCollection' } & {
      items: Array<Maybe<{ __typename?: 'ResumeSection' } & ResumeSectionFragment>>;
    }
  >;
};

export type PageHeaderFragment = { __typename?: 'PageHeader' } & Pick<PageHeader, 'title'> & {
    description?: Maybe<
      { __typename?: 'PageHeaderDescription' } & Pick<PageHeaderDescription, 'json'>
    >;
  };

export type ResumeSectionContentFragment = { __typename?: 'ResumeSectionContent' } & Pick<
  ResumeSectionContent,
  'heading' | 'subHeading' | 'description' | 'descriptionList'
>;

export type ResumeSectionFragment = { __typename?: 'ResumeSection' } & Pick<
  ResumeSection,
  'name' | 'heading'
> & {
    contentCollection?: Maybe<
      { __typename?: 'ResumeSectionContentCollection' } & {
        items: Array<Maybe<{ __typename?: 'ResumeSectionContent' } & ResumeSectionContentFragment>>;
      }
    >;
  };

export type SocialLinkFragment = { __typename?: 'SocialLink' } & Pick<
  SocialLink,
  'href' | 'icon' | 'target'
>;

export type PageQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type PageQuery = { __typename?: 'Query' } & {
  page?: Maybe<{ __typename?: 'Page' } & PageFieldsFragment>;
};

/* eslint-enable */
