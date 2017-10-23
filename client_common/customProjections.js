/**
 * This file holds specific projection parameters like extent and axis orientation
 * Both clients use this file
 *
 * Just add desired projections to the array, do not remove them!
 *
 * Extent (left, bottom, right, top) in map units must exist.
 * You can get it from https://epsg.io (copy projected bounds) or from baselayer definition.
 *
 */

var CustomProj = [];

CustomProj['EPSG:2177'] = {extent: [], units: 'm', yx: true};
CustomProj['EPSG:2180'] = {extent: [116649.52,118322.29,806302.07,845151.24], units: 'm', yx: true};        //Poland
CustomProj['EPSG:3006'] = {extent: [-1200000,4305696,2994304,8500000], units: 'm', yx: true};               //Sweden
CustomProj['EPSG:32635']= {extent: [-760000, 6580000, 657000, 8990000], units: 'm', yx: false};             //Norway
CustomProj['EPSG:3794'] = {extent: [32395.09,373217.65,194645.86,622710.74], units: 'm', yx: true};         //Slovenia new
CustomProj['EPSG:3857'] = {extent: [-20037508.34,20037508.34,20037508.34,20037508.34], units: 'm', yx: false};
CustomProj['EPSG:3909'] = {extent: [6857660.55,4550994.70,7655918.26,5194896.94], units: 'm', yx: true};    //Balkan Zone 7
CustomProj['EPSG:3912'] = {extent: [363774.72,-475760.46,1113039.95,224384.21], units: 'm', yx: false};     //Slovenia old
