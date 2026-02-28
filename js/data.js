/**
 * Portfolio data: file lists, path helper, and collage layout pattern.
 */

const interiorFiles = [
  '50125604-59.JPG',
  '50125604-6.JPG',
  '50143303-30495F7A-E85F-40E2-BB6D-26C88158E155.JPG',
  '50147974-8fb28395-1cae-4bfd-a245-f33c59ee8db8.JPG',
  '50171450-040db75a-aa31-47b3-90c8-8a4903c7033a.JPG',
  '50171450-0dfd96bb-9f34-4f20-9b99-cd3bb461d1cf.JPG',
  '50171450-2008bd75-ebd4-48ff-897b-2e2e59a08240.JPG',
  '50187944-02659879-ad17-4106-b16f-5edd122cde3f.JPG',
  '50187944-2f694e4b-00ac-4801-8641-626f439c79fd-2.JPG',
  '50187944-8976b19e-2611-4826-ae0d-f7661b824245.JPG'
];

const exteriorFiles = [
  '50125604-1.JPG',
  '50125604-88.JPG',
  '50143303-9A584368-339B-4A9B-AE68-2DF85B220994.JPG',
  '50148972-38e0b392-0f45-43c4-926d-7c9daa707251.JPG',
  '50148972-f5220a56-1d22-4584-8a9e-f163489bb5ae.JPG',
  '50152796-D6EB018A-B3AD-4BB4-AB46-57260176819A.JPG',
  '50176043-0efe7880-2fb2-4b6f-b8db-59b76cd28563.JPG',
  '50176043-f80b3578-c358-4e11-a54c-0fd0185ec2fe.JPG',
  'DJI_0032_3_4.jpg',
  'DJI_0131_2_3.jpg',
  'DJI_0395_6_7.jpg',
  'DJI_0626_7_8.jpg',
  'DJI_0923_4_5.jpg',
  'DJI_0929_30_31.jpg',
  'DJI_0938_39_40.jpg',
  'DJI_0959_60_61.jpg',
  'DJI_0977_8_9.jpg',
  'DJI_1002_3_4.jpg'
];

const toPhotoPath = (folder, filename) => encodeURI(`photos/${folder}/${filename}`);

const portfolio = [
  ...interiorFiles.map((filename, index) => {
    const imagePath = toPhotoPath('Interior Photos', filename);
    return {
      src: imagePath,
      thumb: imagePath,
      category: 'interior',
      title: `Interior ${String(index + 1).padStart(2, '0')}`,
      location: 'Western Upper Peninsula, MI'
    };
  }),
  ...exteriorFiles.map((filename, index) => {
    const imagePath = toPhotoPath('Exterior Photos', filename);
    return {
      src: imagePath,
      thumb: imagePath,
      category: 'exterior',
      title: `Exterior ${String(index + 1).padStart(2, '0')}`,
      location: 'Western Upper Peninsula, MI'
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
