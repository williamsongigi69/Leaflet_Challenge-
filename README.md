# Visualizing Earthquake Data with Leaflet

This project uses the Leaflet javascript library to visualize earthquake events and the geographic location of tectonic plates. The earthquake dataset is read from USGS (United States Geological Survey), and the tectonic plates information is obtained from <https://github.com/fraxen/tectonicplates>. 


## Earthquake Layer
* Earthquakes are marked using circle data markers. The size of each circle is proportional to the magnitude of the earthquake it marks. In addition, a color scaling was applied so that the earthquakes with higher magnitudes are shown by circles of darker color.
* Popups are included in the earthquake visualizations and provide additional information about the specific earthquake event it represents.
* Legends are added in the map.

### Tectonic Plates Layer
* A second data set layer was added to the map in order to illustrate the relationship between tectonic plates and seismic activity.
* A "light" and "dark" base layer were added to the map.
* Layer control was added to the map.
