/**
 * Data processing for templates
 */

// Function to send to build data
function buildData() {
  return {
    cities: {
      source: 'sources/greater-mn-retail-edited.csv',
      local: 'greater-mn-retail.json',
      postprocess: data => {
        let parsed = data.map(d => {
          const mil = 1000000;

          // RCS = Retail and Consumer Services
          return {
            name: d['City'],
            rcsSales2015: parseFloat(d['RCS 2015 ($mil)']) * mil,
            rcsSales2009:
              parseFloat(d['RCS 2009 (2015 dollars, million)']) * mil,
            rcsSalesChange: parseFloat(d['RCS Change 2009-2015']),
            rcsPopulation: parseInt(d['RCS Person count'], 10),
            rcsSalesPerPerson: parseFloat(d['RCS 2015 Sales per person']),
            rSales2015: parseFloat(d['R 2015 ($mil)']) * mil,
            rSales2015ofRcs: parseFloat(d['R Percent of RCS']),
            rSalesChange: parseFloat(d['R Change 2009-2015']),
            rRetailers2015: parseInt(d['R Retailers 2015'], 10),
            rRetailersChange: parseFloat(d['R Retailers Change 2009-2015']),
            notes: d.Notes ? d.Notes.trim() : undefined,
            lat: parseFloat(d.lat),
            lng: parseFloat(d.lng)
          };
        });

        return parsed;
      }
    }
  };
}

// Export
module.exports = {
  buildData
};
