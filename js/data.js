/**
 * Portfolio data: file lists, path helper, detailed metadata, and collage layout pattern.
 */

const interiorData = [
  {
    file: '50125604-59.JPG',
    title: 'Modern Master Bedroom',
    alt: 'Master bedroom real estate interior photography with natural light and wood beam accents in the Upper Peninsula',
    location: 'Keweenaw Peninsula, MI'
  },
  {
    file: '50125604-6.JPG',
    title: 'Open Living Space',
    alt: 'Spacious open-concept living room interior architectural photography in Michigan',
    location: 'Western Upper Peninsula, MI'
  },
  {
    file: '50143303-30495F7A-E85F-40E2-BB6D-26C88158E155.JPG',
    title: 'Custom Chef\'s Kitchen',
    alt: 'Gourmet kitchen interior photography showing custom cabinetry and dining island',
    location: 'Houghton County, MI'
  },
  {
    file: '50147974-8fb28395-1cae-4bfd-a245-f33c59ee8db8.JPG',
    title: 'Hearth & Great Room',
    alt: 'Cozy living room interior with stone fireplace and hardwood flooring architectural photo',
    location: 'Western Upper Peninsula, MI'
  },
  {
    file: '50171450-040db75a-aa31-47b3-90c8-8a4903c7033a.JPG',
    title: 'Architectural Woodwork',
    alt: 'Architectural detail photography of custom woodwork and interior craftsmanship',
    location: 'Chassell, MI'
  },
  {
    file: '50171450-0dfd96bb-9f34-4f20-9b99-cd3bb461d1cf.JPG',
    title: 'Cathedral Ceiling Great Room',
    alt: 'High cathedral ceiling great room interior photography with scenic forest view windows',
    location: 'Western Upper Peninsula, MI'
  },
  {
    file: '50171450-2008bd75-ebd4-48ff-897b-2e2e59a08240.JPG',
    title: 'Ensuite Bath Architecture',
    alt: 'Luxury ensuite bathroom real estate photography with contemporary fixtures',
    location: 'Houghton County, MI'
  },
  {
    file: '50187944-02659879-ad17-4106-b16f-5edd122cde3f.JPG',
    title: 'Guest Bedroom Interior',
    alt: 'Bright guest bedroom real estate photo showcasing natural ambient lighting',
    location: 'Keweenaw County, MI'
  },
  {
    file: '50187944-2f694e4b-00ac-4801-8641-626f439c79fd-2.JPG',
    title: 'Contemporary Kitchen Design',
    alt: 'Modern kitchen layout and architectural finishes real estate photography',
    location: 'Western Upper Peninsula, MI'
  },
  {
    file: '50187944-8976b19e-2611-4826-ae0d-f7661b824245.JPG',
    title: 'Entryway Architectural Detail',
    alt: 'Warm residential foyer and interior hallway architectural photography',
    location: 'Baraga County, MI'
  }
];

const exteriorData = [
  {
    file: '50125604-1.JPG',
    title: 'Waterfront Estate at Dusk',
    alt: 'Upper Peninsula waterfront luxury home exterior architectural photography at sunset',
    location: 'Western Upper Peninsula, MI'
  },
  {
    file: '50125604-88.JPG',
    title: 'Estate Landscaping & Facade',
    alt: 'Custom home exterior photography highlighting architectural design and landscaped grounds',
    location: 'Western Upper Peninsula, MI'
  },
  {
    file: '50143303-9A584368-339B-4A9B-AE68-2DF85B220994.JPG',
    title: 'Custom Residential Entrance',
    alt: 'Real estate exterior photography capturing custom portico entrance and timber architecture',
    location: 'Houghton County, MI'
  },
  {
    file: '50148972-38e0b392-0f45-43c4-926d-7c9daa707251.JPG',
    title: 'Keweenaw Lakeside Home',
    alt: 'Lakeside residential architectural photography along the Keweenaw Peninsula shoreline',
    location: 'Keweenaw Peninsula, MI'
  },
  {
    file: '50148972-f5220a56-1d22-4584-8a9e-f163489bb5ae.JPG',
    title: 'Modern Architecture Facade',
    alt: 'Modern residential exterior architectural photography with natural light in Michigan',
    location: 'Western Upper Peninsula, MI'
  },
  {
    file: '50152796-D6EB018A-B3AD-4BB4-AB46-57260176819A.JPG',
    title: 'Woodland Cottage Retreat',
    alt: 'Upper Peninsula cabin and cottage real estate photography surrounded by pine forest',
    location: 'Ontonagon County, MI'
  },
  {
    file: '50176043-0efe7880-2fb2-4b6f-b8db-59b76cd28563.JPG',
    title: 'Craftsman Home Elevation',
    alt: 'Craftsman style home exterior photography with clean architectural lines and manicured yard',
    location: 'Houghton County, MI'
  },
  {
    file: '50176043-f80b3578-c358-4e11-a54c-0fd0185ec2fe.JPG',
    title: 'Rear Elevation & Patio',
    alt: 'Outdoor living patio and rear architectural elevation real estate listing photo',
    location: 'Western Upper Peninsula, MI'
  },
  {
    file: 'DJI_0032_3_4.jpg',
    title: 'Shoreline Drone Aerial View',
    alt: 'Aerial drone photography of Western Upper Peninsula waterfront residential property',
    location: 'Keweenaw County, MI'
  },
  {
    file: 'DJI_0131_2_3.jpg',
    title: 'Waterfront Aerial Perspective',
    alt: 'High-resolution drone aerial view of lakeside home and surrounding woodland',
    location: 'Western Upper Peninsula, MI'
  },
  {
    file: 'DJI_0395_6_7.jpg',
    title: 'Estate Grounds Drone Capture',
    alt: 'Aerial drone photography of expansive acreage and private residence in Upper Peninsula MI',
    location: 'Baraga County, MI'
  },
  {
    file: 'DJI_0626_7_8.jpg',
    title: 'Keweenaw Coastline Aerial',
    alt: 'Drone aerial architectural photography showcasing Lake Superior coastal real estate',
    location: 'Keweenaw Peninsula, MI'
  },
  {
    file: 'DJI_0923_4_5.jpg',
    title: 'Secluded Woodland Property',
    alt: 'Aerial drone view of secluded cabin acreage in the Ottawa National Forest region',
    location: 'Ontonagon County, MI'
  },
  {
    file: 'DJI_0929_30_31.jpg',
    title: 'Peninsula Waterfront Drone Shot',
    alt: 'Overhead drone real estate photograph showing property lines and shoreline',
    location: 'Western Upper Peninsula, MI'
  },
  {
    file: 'DJI_0938_39_40.jpg',
    title: 'Elevated Architectural Angle',
    alt: 'Elevated drone angle capturing estate architectural layout and rooflines',
    location: 'Houghton County, MI'
  },
  {
    file: 'DJI_0959_60_61.jpg',
    title: 'Lake Superior Shoreline Drone',
    alt: 'Aerial drone photography capturing home nestled along the Lake Superior coast',
    location: 'Keweenaw County, MI'
  },
  {
    file: 'DJI_0977_8_9.jpg',
    title: 'Overhead Property Aerial',
    alt: 'Overhead drone photography of residential property and surrounding natural landscape',
    location: 'Western Upper Peninsula, MI'
  },
  {
    file: 'DJI_1002_3_4.jpg',
    title: 'Panoramic U.P. Drone Landscape',
    alt: 'Panoramic aerial drone photograph of residential home in Western Upper Peninsula Michigan',
    location: 'Western Upper Peninsula, MI'
  }
];

const toPhotoPath = (folder, filename) => encodeURI(`photos/${folder}/${filename}`);

const portfolio = [
  ...interiorData.map((item) => {
    const imagePath = toPhotoPath('Interior Photos', item.file);
    return {
      src: imagePath,
      thumb: imagePath,
      category: 'interior',
      title: item.title,
      alt: item.alt,
      location: item.location
    };
  }),
  ...exteriorData.map((item) => {
    const imagePath = toPhotoPath('Exterior Photos', item.file);
    return {
      src: imagePath,
      thumb: imagePath,
      category: 'exterior',
      title: item.title,
      alt: item.alt,
      location: item.location
    };
  })
];

/** Collage layout pattern: shape and grid spans per breakpoint. */
const collagePattern = [
  { shape: 'hero', colSpan: 8, rowSpan: 4, minWidth: 'lg' },
  { shape: 'portrait', colSpan: 4, rowSpan: 4, minWidth: 'lg' },
  { shape: 'wide', colSpan: 6, rowSpan: 3, minWidth: 'md' },
  { shape: 'wide', colSpan: 6, rowSpan: 3, minWidth: 'md' },
  { shape: 'portrait', colSpan: 4, rowSpan: 4, minWidth: 'lg' },
  { shape: 'square', colSpan: 4, rowSpan: 3, minWidth: 'md' },
  { shape: 'portrait', colSpan: 4, rowSpan: 4, minWidth: 'lg' },
  { shape: 'panorama', colSpan: 12, rowSpan: 3, minWidth: 'md' }
];
