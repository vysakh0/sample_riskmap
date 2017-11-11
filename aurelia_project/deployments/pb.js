export default {
  name: 'riskmap_my',
  height_units: 'cm',
  map: {
    'instance_regions': {
      'penang': {
        'region': 'png',
        'bounds': { //arbit bounding box drawn in QGIS. So the edges aren't orthogonal
          'sw': [5.122673, 100.1023307000],
          'ne': [5.5974837, 100.550619999]
        }
      }
    },
    'default_region': {
      'region': 'chn',
      'bounds': {
        'sw': [12.6884, 79.9248],
        'ne': [13.3766, 80.5413]
      }
    },
    'region_center': [5.4163459, 100.33276169],
    'start_city_center': [5.4163459, 100.33276169],
    'starting_zoom': 10,
    'minimum_zoom': 10
  }
};

