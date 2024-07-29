// Aggregates

// Color

// Conditionals
function fnc_coalesce(values, context) {
    for (i = 0; i < values.length; i++) {
        if (values[i] !== null) {
            return values[i];
        }
        
    }
    return 'ERROR';
};

// Conversions

// Custom

// Date and Time

// Fields and Values

// Fuzzy Matching

// General

// Geometry
function fnc_azimuth(values, context) {
    return false;
};

function fnc_project(values, context) {
    return false;
};

// Math
function fnc_abs(values, context) {
    return Math.abs(values[0]);
};

function fnc_degrees(values, context) {
    return values[0] * (180/Math.PI);
};

function fnc_radians(values, context) {
    return values[0] * (Math.PI/180);
};

function fnc_sqrt(values, context) {
    return Math.sqrt(values[0]);
};

function fnc_cos(values, context) {
    return Math.cos(values[0]);
};

function fnc_sin(values, context) {
    return Math.sin(values[0]);
};

function fnc_tan(values, context) {
    return Math.tan(values[0]);
};

function fnc_asin(values, context) {
    return Math.asin(values[0]);
};

function fnc_acos(values, context) {
    return Math.acos(values[0]);
};

function fnc_atan(values, context) {
    return Math.atan(values[0]);
};

function fnc_atan2(values, context) {
    return Math.atan2(values[0]);
};

function fnc_exp(values, context) {
    return Math.exp(values[0]);
};

function fnc_ln(values, context) {
    return Math.log(values[0]);
};

function fnc_log10(values, context) {
    return Math.log10(values[0]);
};

function fnc_log(values, context) {
    return Math.log(values[0]) / Math.log(values[1]);
};

function fnc_round(values, context) {
    return false;
};

function fnc_rand(values, context) {
    return Math.floor(Math.random()*(values[1]-values[0]+1)+values[0]);
};

function fnc_randf(values, context) {
    return Math.random()*(values[1]-values[0]+1)+values[0];
};

function fnc_max(values, context) {
    return Math.max.apply(this, values);
};

function fnc_min(values, context) {
    return Math.min.apply(this, values);
};

function fnc_clamp(values, context) {
    return false;
};

// Operators

// Record

// String

// TimeManager

// Variables



function fnc_scale_linear(values, context) {
    return false;
};

function fnc_scale_exp(values, context) {
    return false;
};

function fnc_floor(values, context) {
    return false;
};

function fnc_ceil(values, context) {
    return false;
};

function fnc_pi(values, context) {
    return false;
};

function fnc_to_int(values, context) {
    return false;
};

function fnc_to_real(values, context) {
    return false;
};

function fnc_to_string(values, context) {
    return false;
};

function fnc_to_datetime(values, context) {
    return false;
};

function fnc_to_date(values, context) {
    return false;
};

function fnc_to_time(values, context) {
    return false;
};

function fnc_to_interval(values, context) {
    return false;
};

function fnc_if(values, context) {
    return false;
};

function fnc_aggregate(values, context) {
    return false;
};

function fnc_relation_aggregate(values, context) {
    return false;
};

function fnc_count(values, context) {
    return false;
};

function fnc_count_distinct(values, context) {
    return false;
};

function fnc_count_missing(values, context) {
    return false;
};

function fnc_minimum(values, context) {
    return false;
};

function fnc_maximum(values, context) {
    return false;
};

function fnc_sum(values, context) {
    return false;
};

function fnc_mean(values, context) {
    return false;
};

function fnc_median(values, context) {
    return false;
};

function fnc_stdev(values, context) {
    return false;
};

function fnc_range(values, context) {
    return false;
};

function fnc_minority(values, context) {
    return false;
};

function fnc_majority(values, context) {
    return false;
};

function fnc_q1(values, context) {
    return false;
};

function fnc_q3(values, context) {
    return false;
};

function fnc_iqr(values, context) {
    return false;
};

function fnc_min_length(values, context) {
    return false;
};

function fnc_max_length(values, context) {
    return false;
};

function fnc_concatenate(values, context) {
    return false;
};

function fnc_regexp_match(values, context) {
    return false;
};

function fnc_now(values, context) {
    return false;
};

function fnc_age(values, context) {
    return false;
};

function fnc_year(values, context) {
    return false;
};

function fnc_month(values, context) {
    return false;
};

function fnc_week(values, context) {
    return false;
};

function fnc_day(values, context) {
    return false;
};

function fnc_hour(values, context) {
    return false;
};

function fnc_minute(values, context) {
    return false;
};

function fnc_second(values, context) {
    return false;
};

function fnc_day_of_week(values, context) {
    return false;
};

function fnc_lower(values, context) {
    return values[0].toLowerCase();
};

function fnc_upper(values, context) {
    return false;
};

function fnc_title(values, context) {
    return false;
};

function fnc_trim(values, context) {
    return false;
};

function fnc_levenshtein(values, context) {
    return false;
};

function fnc_longest_common_substring(values, context) {
    return false;
};

function fnc_hamming_distance(values, context) {
    return false;
};

function fnc_soundex(values, context) {
    return false;
};

function fnc_char(values, context) {
    return false;
};

function fnc_wordwrap(values, context) {
    return false;
};

function fnc_length(values, context) {
    return false;
};

function fnc_replace(values, context) {
    return false;
};

function fnc_regexp_replace(values, context) {
    return false;
};

function fnc_regexp_substr(values, context) {
    return false;
};

function fnc_substr(values, context) {
    return false;
};

function fnc_concat(values, context) {
    return false;
};

function fnc_strpos(values, context) {
    return false;
};

function fnc_left(values, context) {
    return false;
};

function fnc_right(values, context) {
    return false;
};

function fnc_rpad(values, context) {
    return false;
};

function fnc_lpad(values, context) {
    return false;
};

function fnc_format(values, context) {
    return false;
};

function fnc_format_number(values, context) {
    return false;
};

function fnc_format_date(values, context) {
    return false;
};

function fnc_color_rgb(values, context) {
    return false;
};

function fnc_color_rgba(values, context) {
    return false;
};

function fnc_ramp_color(values, context) {
    return false;
};

function fnc_color_hsl(values, context) {
    return false;
};

function fnc_color_hsla(values, context) {
    return false;
};

function fnc_color_hsv(values, context) {
    return false;
};

function fnc_color_hsva(values, context) {
    return false;
};

function fnc_color_cmyk(values, context) {
    return false;
};

function fnc_color_cmyka(values, context) {
    return false;
};

function fnc_color_part(values, context) {
    return false;
};

function fnc_darker(values, context) {
    return false;
};

function fnc_lighter(values, context) {
    return false;
};

function fnc_set_color_part(values, context) {
    return false;
};

function fnc_area(values, context) {
    return false;
};

function fnc_perimeter(values, context) {
    return false;
};

function fnc_x(values, context) {
    return false;
};

function fnc_y(values, context) {
    return false;
};

function fnc_z(values, context) {
    return false;
};

function fnc_m(values, context) {
    return false;
};

function fnc_point_n(values, context) {
    return false;
};

function fnc_start_point(values, context) {
    return false;
};

function fnc_end_point(values, context) {
    return false;
};

function fnc_nodes_to_points(values, context) {
    return false;
};

function fnc_segments_to_lines(values, context) {
    return false;
};

function fnc_make_point(values, context) {
    return false;
};

function fnc_make_point_m(values, context) {
    return false;
};

function fnc_make_line(values, context) {
    return false;
};

function fnc_make_polygon(values, context) {
    return false;
};

function fnc_x_min(values, context) {
    return false;
};

function fnc_x_max(values, context) {
    return false;
};

function fnc_y_min(values, context) {
    return false;
};

function fnc_y_max(values, context) {
    return false;
};

function fnc_geom_from_wkt(values, context) {
    return false;
};

function fnc_geom_from_gml(values, context) {
    return false;
};

function fnc_relate(values, context) {
    return false;
};

function fnc_intersects_bbox(values, context) {
    return false;
};

function fnc_disjoint(values, context) {
    return false;
};

function fnc_intersects(values, context) {
    return false;
};

function fnc_touches(values, context) {
    return false;
};

function fnc_crosses(values, context) {
    return false;
};

function fnc_contains(values, context) {
    return false;
};

function fnc_overlaps(values, context) {
    return false;
};

function fnc_within(values, context) {
    return false;
};

function fnc_translate(values, context) {
    return false;
};

function fnc_buffer(values, context) {
    return false;
};

function fnc_centroid(values, context) {
    return false;
};

function fnc_point_on_surface(values, context) {
    return false;
};

function fnc_reverse(values, context) {
    return false;
};

function fnc_exterior_ring(values, context) {
    return false;
};

function fnc_interior_ring_n(values, context) {
    return false;
};

function fnc_geometry_n(values, context) {
    return false;
};

function fnc_boundary(values, context) {
    return false;
};

function fnc_line_merge(values, context) {
    return false;
};

function fnc_bounds(values, context) {
    return false;
};

function fnc_num_points(values, context) {
    return false;
};

function fnc_num_interior_rings(values, context) {
    return false;
};

function fnc_num_rings(values, context) {
    return false;
};

function fnc_num_geometries(values, context) {
    return false;
};

function fnc_bounds_width(values, context) {
    return false;
};

function fnc_bounds_height(values, context) {
    return false;
};

function fnc_is_closed(values, context) {
    return false;
};

function fnc_convex_hull(values, context) {
    return false;
};

function fnc_difference(values, context) {
    return false;
};

function fnc_distance(values, context) {
    return false;
};

function fnc_intersection(values, context) {
    return false;
};

function fnc_sym_difference(values, context) {
    return false;
};

function fnc_combine(values, context) {
    return false;
};

function fnc_union(values, context) {
    return false;
};

function fnc_geom_to_wkt(values, context) {
    return false;
};

function fnc_geometry(values, context) {
    return false;
};

function fnc_transform(values, context) {
    return false;
};

function fnc_extrude(values, context) {
    return false;
};

function fnc_order_parts(values, context) {
    return false;
};

function fnc_closest_point(values, context) {
    return false;
};

function fnc_shortest_line(values, context) {
    return false;
};

function fnc_line_interpolate_point(values, context) {
    return false;
};

function fnc_line_interpolate_angle(values, context) {
    return false;
};

function fnc_line_locate_point(values, context) {
    return false;
};

function fnc_angle_at_vertex(values, context) {
    return false;
};

function fnc_distance_to_vertex(values, context) {
    return false;
};

function fnc_uuid(values, context) {
    return false;
};

function fnc_get_feature(values, context) {
    return false;
};

function fnc_layer_property(values, context) {
    return false;
};

function fnc_var(values, context) {
    return false;
};

function fnc_eval(values, context) {
    return false;
};

function fnc_attribute(values, context) {
    return false;
};

function fnc__specialcol_(values, context) {
    return false;
};

function fnc_project_color(values, context) {
    return false;
};



function exp_Viajespormotivosderecreacin_2rule0_eval_expression(context) {
    // "Viajes por motivos de recreación" >= 1 AND "Viajes por motivos de recreación" <= 2

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes por motivos de recreación']  >= 1.0) && (feature.properties['Viajes por motivos de recreación']  <= 2.0));
    } else {
        return ((feature['Viajes por motivos de recreación']  >= 1.0) && (feature['Viajes por motivos de recreación']  <= 2.0));
    }
}


function exp_Viajespormotivosderecreacin_2rule1_eval_expression(context) {
    // "Viajes por motivos de recreación" > 2 AND "Viajes por motivos de recreación" <= 11

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes por motivos de recreación']  > 2.0) && (feature.properties['Viajes por motivos de recreación']  <= 11.0));
    } else {
        return ((feature['Viajes por motivos de recreación']  > 2.0) && (feature['Viajes por motivos de recreación']  <= 11.0));
    }
}


function exp_Viajespormotivosderecreacin_2rule2_eval_expression(context) {
    // "Viajes por motivos de recreación" > 11 AND "Viajes por motivos de recreación" <= 25

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes por motivos de recreación']  > 11.0) && (feature.properties['Viajes por motivos de recreación']  <= 25.0));
    } else {
        return ((feature['Viajes por motivos de recreación']  > 11.0) && (feature['Viajes por motivos de recreación']  <= 25.0));
    }
}


function exp_Viajespormotivosderecreacin_2rule3_eval_expression(context) {
    // "Viajes por motivos de recreación" > 25 AND "Viajes por motivos de recreación" <= 76

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes por motivos de recreación']  > 25.0) && (feature.properties['Viajes por motivos de recreación']  <= 76.0));
    } else {
        return ((feature['Viajes por motivos de recreación']  > 25.0) && (feature['Viajes por motivos de recreación']  <= 76.0));
    }
}


function exp_Viajesportareasdecuidado_3rule0_eval_expression(context) {
    // "Viajes por compras y trámites" >= 1 AND "Viajes por compras y trámites" <= 3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes por compras y trámites']  >= 1.0) && (feature.properties['Viajes por compras y trámites']  <= 3.0));
    } else {
        return ((feature['Viajes por compras y trámites']  >= 1.0) && (feature['Viajes por compras y trámites']  <= 3.0));
    }
}


function exp_Viajesportareasdecuidado_3rule1_eval_expression(context) {
    // "Viajes por compras y trámites" > 3 AND "Viajes por compras y trámites" <= 14

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes por compras y trámites']  > 3.0) && (feature.properties['Viajes por compras y trámites']  <= 14.0));
    } else {
        return ((feature['Viajes por compras y trámites']  > 3.0) && (feature['Viajes por compras y trámites']  <= 14.0));
    }
}


function exp_Viajesportareasdecuidado_3rule2_eval_expression(context) {
    // "Viajes por compras y trámites" > 14 AND "Viajes por compras y trámites" <= 47

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes por compras y trámites']  > 14.0) && (feature.properties['Viajes por compras y trámites']  <= 47.0));
    } else {
        return ((feature['Viajes por compras y trámites']  > 14.0) && (feature['Viajes por compras y trámites']  <= 47.0));
    }
}


function exp_Viajesportareasdecuidado_3rule3_eval_expression(context) {
    // "Viajes por compras y trámites" > 47 AND "Viajes por compras y trámites" <= 131

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes por compras y trámites']  > 47.0) && (feature.properties['Viajes por compras y trámites']  <= 131.0));
    } else {
        return ((feature['Viajes por compras y trámites']  > 47.0) && (feature['Viajes por compras y trámites']  <= 131.0));
    }
}


function exp_Viajespormotivosdeestudio_4rule0_eval_expression(context) {
    // "Viajes por motivos de estudio" >= 1 AND "Viajes por motivos de estudio" <= 3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes por motivos de estudio']  >= 1.0) && (feature.properties['Viajes por motivos de estudio']  <= 3.0));
    } else {
        return ((feature['Viajes por motivos de estudio']  >= 1.0) && (feature['Viajes por motivos de estudio']  <= 3.0));
    }
}


function exp_Viajespormotivosdeestudio_4rule1_eval_expression(context) {
    // "Viajes por motivos de estudio" > 3 AND "Viajes por motivos de estudio" <= 11

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes por motivos de estudio']  > 3.0) && (feature.properties['Viajes por motivos de estudio']  <= 11.0));
    } else {
        return ((feature['Viajes por motivos de estudio']  > 3.0) && (feature['Viajes por motivos de estudio']  <= 11.0));
    }
}


function exp_Viajespormotivosdeestudio_4rule2_eval_expression(context) {
    // "Viajes por motivos de estudio" > 11 AND "Viajes por motivos de estudio" <= 24

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes por motivos de estudio']  > 11.0) && (feature.properties['Viajes por motivos de estudio']  <= 24.0));
    } else {
        return ((feature['Viajes por motivos de estudio']  > 11.0) && (feature['Viajes por motivos de estudio']  <= 24.0));
    }
}


function exp_Viajespormotivosdeestudio_4rule3_eval_expression(context) {
    // "Viajes por motivos de estudio" > 24 AND "Viajes por motivos de estudio" <= 60

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes por motivos de estudio']  > 24.0) && (feature.properties['Viajes por motivos de estudio']  <= 60.0));
    } else {
        return ((feature['Viajes por motivos de estudio']  > 24.0) && (feature['Viajes por motivos de estudio']  <= 60.0));
    }
}


function exp_Viajespormotivosdeestudio_4rule4_eval_expression(context) {
    // "Viajes por motivos de estudio" > 60 AND "Viajes por motivos de estudio" <= 276

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes por motivos de estudio']  > 60.0) && (feature.properties['Viajes por motivos de estudio']  <= 276.0));
    } else {
        return ((feature['Viajes por motivos de estudio']  > 60.0) && (feature['Viajes por motivos de estudio']  <= 276.0));
    }
}


function exp_Viajespormotivosdetrabajo_5rule0_eval_expression(context) {
    // "Viajes por motivos de trabajo" >= 0 AND "Viajes por motivos de trabajo" <= 13

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes por motivos de trabajo']  >= 0.0) && (feature.properties['Viajes por motivos de trabajo']  <= 13.0));
    } else {
        return ((feature['Viajes por motivos de trabajo']  >= 0.0) && (feature['Viajes por motivos de trabajo']  <= 13.0));
    }
}


function exp_Viajespormotivosdetrabajo_5rule1_eval_expression(context) {
    // "Viajes por motivos de trabajo" > 13 AND "Viajes por motivos de trabajo" <= 47

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes por motivos de trabajo']  > 13.0) && (feature.properties['Viajes por motivos de trabajo']  <= 47.0));
    } else {
        return ((feature['Viajes por motivos de trabajo']  > 13.0) && (feature['Viajes por motivos de trabajo']  <= 47.0));
    }
}


function exp_Viajespormotivosdetrabajo_5rule2_eval_expression(context) {
    // "Viajes por motivos de trabajo" > 47 AND "Viajes por motivos de trabajo" <= 111

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes por motivos de trabajo']  > 47.0) && (feature.properties['Viajes por motivos de trabajo']  <= 111.0));
    } else {
        return ((feature['Viajes por motivos de trabajo']  > 47.0) && (feature['Viajes por motivos de trabajo']  <= 111.0));
    }
}


function exp_Viajespormotivosdetrabajo_5rule3_eval_expression(context) {
    // "Viajes por motivos de trabajo" > 111 AND "Viajes por motivos de trabajo" <= 327

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes por motivos de trabajo']  > 111.0) && (feature.properties['Viajes por motivos de trabajo']  <= 327.0));
    } else {
        return ((feature['Viajes por motivos de trabajo']  > 111.0) && (feature['Viajes por motivos de trabajo']  <= 327.0));
    }
}


function exp_Viajespormotivosdetrabajo_5rule4_eval_expression(context) {
    // "Viajes por motivos de trabajo" > 327 AND "Viajes por motivos de trabajo" <= 774

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes por motivos de trabajo']  > 327.0) && (feature.properties['Viajes por motivos de trabajo']  <= 774.0));
    } else {
        return ((feature['Viajes por motivos de trabajo']  > 327.0) && (feature['Viajes por motivos de trabajo']  <= 774.0));
    }
}


function exp_Viajesmultimodalesentransportepblicoestructurado_7rule0_eval_expression(context) {
    // "Viajes en transporte público estructurado multimodal" >= 0 AND "Viajes en transporte público estructurado multimodal" <= 2

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes en transporte público estructurado multimodal']  >= 0.0) && (feature.properties['Viajes en transporte público estructurado multimodal']  <= 2.0));
    } else {
        return ((feature['Viajes en transporte público estructurado multimodal']  >= 0.0) && (feature['Viajes en transporte público estructurado multimodal']  <= 2.0));
    }
}


function exp_Viajesmultimodalesentransportepblicoestructurado_7rule1_eval_expression(context) {
    // "Viajes en transporte público estructurado multimodal" > 2 AND "Viajes en transporte público estructurado multimodal" <= 4

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes en transporte público estructurado multimodal']  > 2.0) && (feature.properties['Viajes en transporte público estructurado multimodal']  <= 4.0));
    } else {
        return ((feature['Viajes en transporte público estructurado multimodal']  > 2.0) && (feature['Viajes en transporte público estructurado multimodal']  <= 4.0));
    }
}


function exp_Viajesmultimodalesentransportepblicoestructurado_7rule2_eval_expression(context) {
    // "Viajes en transporte público estructurado multimodal" > 4 AND "Viajes en transporte público estructurado multimodal" <= 6

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes en transporte público estructurado multimodal']  > 4.0) && (feature.properties['Viajes en transporte público estructurado multimodal']  <= 6.0));
    } else {
        return ((feature['Viajes en transporte público estructurado multimodal']  > 4.0) && (feature['Viajes en transporte público estructurado multimodal']  <= 6.0));
    }
}


function exp_Viajesmultimodalesentransportepblicoestructurado_7rule3_eval_expression(context) {
    // "Viajes en transporte público estructurado multimodal" > 6 AND "Viajes en transporte público estructurado multimodal" <= 8

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes en transporte público estructurado multimodal']  > 6.0) && (feature.properties['Viajes en transporte público estructurado multimodal']  <= 8.0));
    } else {
        return ((feature['Viajes en transporte público estructurado multimodal']  > 6.0) && (feature['Viajes en transporte público estructurado multimodal']  <= 8.0));
    }
}


function exp_Viajesmultimodalesentransportepblico_8rule0_eval_expression(context) {
    // "Viajes en transporte público multimodal" >= 0 AND "Viajes en transporte público multimodal" <= 14

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes en transporte público multimodal']  >= 0.0) && (feature.properties['Viajes en transporte público multimodal']  <= 14.0));
    } else {
        return ((feature['Viajes en transporte público multimodal']  >= 0.0) && (feature['Viajes en transporte público multimodal']  <= 14.0));
    }
}


function exp_Viajesmultimodalesentransportepblico_8rule1_eval_expression(context) {
    // "Viajes en transporte público multimodal" > 14 AND "Viajes en transporte público multimodal" <= 40

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes en transporte público multimodal']  > 14.0) && (feature.properties['Viajes en transporte público multimodal']  <= 40.0));
    } else {
        return ((feature['Viajes en transporte público multimodal']  > 14.0) && (feature['Viajes en transporte público multimodal']  <= 40.0));
    }
}


function exp_Viajesmultimodalesentransportepblico_8rule2_eval_expression(context) {
    // "Viajes en transporte público multimodal" > 40 AND "Viajes en transporte público multimodal" <= 61

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes en transporte público multimodal']  > 40.0) && (feature.properties['Viajes en transporte público multimodal']  <= 61.0));
    } else {
        return ((feature['Viajes en transporte público multimodal']  > 40.0) && (feature['Viajes en transporte público multimodal']  <= 61.0));
    }
}


function exp_Viajesmultimodalesentransportepblico_8rule3_eval_expression(context) {
    // "Viajes en transporte público multimodal" > 61 AND "Viajes en transporte público multimodal" <= 214

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes en transporte público multimodal']  > 61.0) && (feature.properties['Viajes en transporte público multimodal']  <= 214.0));
    } else {
        return ((feature['Viajes en transporte público multimodal']  > 61.0) && (feature['Viajes en transporte público multimodal']  <= 214.0));
    }
}


function exp_Viajesmultimodalesentransportepblico_8rule4_eval_expression(context) {
    // "Viajes en transporte público multimodal" > 214 AND "Viajes en transporte público multimodal" <= 368

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes en transporte público multimodal']  > 214.0) && (feature.properties['Viajes en transporte público multimodal']  <= 368.0));
    } else {
        return ((feature['Viajes en transporte público multimodal']  > 214.0) && (feature['Viajes en transporte público multimodal']  <= 368.0));
    }
}


function exp_Viajesmultimodalesconusodeauto_9rule0_eval_expression(context) {
    // "Viajes multimodales con uso de auto" >= 0 AND "Viajes multimodales con uso de auto" <= 1

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes multimodales con uso de auto']  >= 0.0) && (feature.properties['Viajes multimodales con uso de auto']  <= 1.0));
    } else {
        return ((feature['Viajes multimodales con uso de auto']  >= 0.0) && (feature['Viajes multimodales con uso de auto']  <= 1.0));
    }
}


function exp_Viajesmultimodalesconusodeauto_9rule1_eval_expression(context) {
    // "Viajes multimodales con uso de auto" > 1 AND "Viajes multimodales con uso de auto" <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes multimodales con uso de auto']  > 1.0) && (feature.properties['Viajes multimodales con uso de auto']  <= 5.0));
    } else {
        return ((feature['Viajes multimodales con uso de auto']  > 1.0) && (feature['Viajes multimodales con uso de auto']  <= 5.0));
    }
}


function exp_Viajesmultimodalesconusodeauto_9rule2_eval_expression(context) {
    // "Viajes multimodales con uso de auto" > 5 AND "Viajes multimodales con uso de auto" <= 14

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes multimodales con uso de auto']  > 5.0) && (feature.properties['Viajes multimodales con uso de auto']  <= 14.0));
    } else {
        return ((feature['Viajes multimodales con uso de auto']  > 5.0) && (feature['Viajes multimodales con uso de auto']  <= 14.0));
    }
}


function exp_Viajesmultimodalesconmovilidadactiva_10rule0_eval_expression(context) {
    // "Viajes multimodales con movilidad activa" >= 0 AND "Viajes multimodales con movilidad activa" <= 3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes multimodales con movilidad activa']  >= 0.0) && (feature.properties['Viajes multimodales con movilidad activa']  <= 3.0));
    } else {
        return ((feature['Viajes multimodales con movilidad activa']  >= 0.0) && (feature['Viajes multimodales con movilidad activa']  <= 3.0));
    }
}


function exp_Viajesmultimodalesconmovilidadactiva_10rule1_eval_expression(context) {
    // "Viajes multimodales con movilidad activa" > 3 AND "Viajes multimodales con movilidad activa" <= 12

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes multimodales con movilidad activa']  > 3.0) && (feature.properties['Viajes multimodales con movilidad activa']  <= 12.0));
    } else {
        return ((feature['Viajes multimodales con movilidad activa']  > 3.0) && (feature['Viajes multimodales con movilidad activa']  <= 12.0));
    }
}


function exp_Viajesmultimodalesconmovilidadactiva_10rule2_eval_expression(context) {
    // "Viajes multimodales con movilidad activa" > 12 AND "Viajes multimodales con movilidad activa" <= 29

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes multimodales con movilidad activa']  > 12.0) && (feature.properties['Viajes multimodales con movilidad activa']  <= 29.0));
    } else {
        return ((feature['Viajes multimodales con movilidad activa']  > 12.0) && (feature['Viajes multimodales con movilidad activa']  <= 29.0));
    }
}


function exp_Viajesmultimodalesconmovilidadactiva_10rule3_eval_expression(context) {
    // "Viajes multimodales con movilidad activa" > 29 AND "Viajes multimodales con movilidad activa" <= 77

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes multimodales con movilidad activa']  > 29.0) && (feature.properties['Viajes multimodales con movilidad activa']  <= 77.0));
    } else {
        return ((feature['Viajes multimodales con movilidad activa']  > 29.0) && (feature['Viajes multimodales con movilidad activa']  <= 77.0));
    }
}


function exp_Viajesmultimodalesconmovilidadactiva_10rule4_eval_expression(context) {
    // "Viajes multimodales con movilidad activa" > 77 AND "Viajes multimodales con movilidad activa" <= 111

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes multimodales con movilidad activa']  > 77.0) && (feature.properties['Viajes multimodales con movilidad activa']  <= 111.0));
    } else {
        return ((feature['Viajes multimodales con movilidad activa']  > 77.0) && (feature['Viajes multimodales con movilidad activa']  <= 111.0));
    }
}


function exp_Viajesunimodalesentransportepbliconoestructurado_11rule0_eval_expression(context) {
    // "Viajes en transporte público no estructurado unimodal" >= 0 AND "Viajes en transporte público no estructurado unimodal" <= 20

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes en transporte público no estructurado unimodal']  >= 0.0) && (feature.properties['Viajes en transporte público no estructurado unimodal']  <= 20.0));
    } else {
        return ((feature['Viajes en transporte público no estructurado unimodal']  >= 0.0) && (feature['Viajes en transporte público no estructurado unimodal']  <= 20.0));
    }
}


function exp_Viajesunimodalesentransportepbliconoestructurado_11rule1_eval_expression(context) {
    // "Viajes en transporte público no estructurado unimodal" > 20 AND "Viajes en transporte público no estructurado unimodal" <= 72

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes en transporte público no estructurado unimodal']  > 20.0) && (feature.properties['Viajes en transporte público no estructurado unimodal']  <= 72.0));
    } else {
        return ((feature['Viajes en transporte público no estructurado unimodal']  > 20.0) && (feature['Viajes en transporte público no estructurado unimodal']  <= 72.0));
    }
}


function exp_Viajesunimodalesentransportepbliconoestructurado_11rule2_eval_expression(context) {
    // "Viajes en transporte público no estructurado unimodal" > 72 AND "Viajes en transporte público no estructurado unimodal" <= 196

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes en transporte público no estructurado unimodal']  > 72.0) && (feature.properties['Viajes en transporte público no estructurado unimodal']  <= 196.0));
    } else {
        return ((feature['Viajes en transporte público no estructurado unimodal']  > 72.0) && (feature['Viajes en transporte público no estructurado unimodal']  <= 196.0));
    }
}


function exp_Viajesunimodalesentransportepbliconoestructurado_11rule3_eval_expression(context) {
    // "Viajes en transporte público no estructurado unimodal" > 196 AND "Viajes en transporte público no estructurado unimodal" <= 447

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes en transporte público no estructurado unimodal']  > 196.0) && (feature.properties['Viajes en transporte público no estructurado unimodal']  <= 447.0));
    } else {
        return ((feature['Viajes en transporte público no estructurado unimodal']  > 196.0) && (feature['Viajes en transporte público no estructurado unimodal']  <= 447.0));
    }
}


function exp_Viajesunimodalesentransportepbliconoestructurado_11rule4_eval_expression(context) {
    // "Viajes en transporte público no estructurado unimodal" > 447 AND "Viajes en transporte público no estructurado unimodal" <= 1246

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes en transporte público no estructurado unimodal']  > 447.0) && (feature.properties['Viajes en transporte público no estructurado unimodal']  <= 1246.0));
    } else {
        return ((feature['Viajes en transporte público no estructurado unimodal']  > 447.0) && (feature['Viajes en transporte público no estructurado unimodal']  <= 1246.0));
    }
}


function exp_Viajesunimodalesentransportepblicoestructurado_12rule0_eval_expression(context) {
    // "Viajes en transporte público estructurado unimodal" >= 0 AND "Viajes en transporte público estructurado unimodal" <= 1

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes en transporte público estructurado unimodal']  >= 0.0) && (feature.properties['Viajes en transporte público estructurado unimodal']  <= 1.0));
    } else {
        return ((feature['Viajes en transporte público estructurado unimodal']  >= 0.0) && (feature['Viajes en transporte público estructurado unimodal']  <= 1.0));
    }
}


function exp_Viajesunimodalesentransportepblicoestructurado_12rule1_eval_expression(context) {
    // "Viajes en transporte público estructurado unimodal" > 1 AND "Viajes en transporte público estructurado unimodal" <= 4

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes en transporte público estructurado unimodal']  > 1.0) && (feature.properties['Viajes en transporte público estructurado unimodal']  <= 4.0));
    } else {
        return ((feature['Viajes en transporte público estructurado unimodal']  > 1.0) && (feature['Viajes en transporte público estructurado unimodal']  <= 4.0));
    }
}


function exp_Viajesunimodalesentransportepblicoestructurado_12rule2_eval_expression(context) {
    // "Viajes en transporte público estructurado unimodal" > 4 AND "Viajes en transporte público estructurado unimodal" <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes en transporte público estructurado unimodal']  > 4.0) && (feature.properties['Viajes en transporte público estructurado unimodal']  <= 10.0));
    } else {
        return ((feature['Viajes en transporte público estructurado unimodal']  > 4.0) && (feature['Viajes en transporte público estructurado unimodal']  <= 10.0));
    }
}


function exp_Viajesunimodalesentransportepblicoestructurado_12rule3_eval_expression(context) {
    // "Viajes en transporte público estructurado unimodal" > 10 AND "Viajes en transporte público estructurado unimodal" <= 37

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes en transporte público estructurado unimodal']  > 10.0) && (feature.properties['Viajes en transporte público estructurado unimodal']  <= 37.0));
    } else {
        return ((feature['Viajes en transporte público estructurado unimodal']  > 10.0) && (feature['Viajes en transporte público estructurado unimodal']  <= 37.0));
    }
}


function exp_Viajesunimodalesentransportepblicoestructurado_12rule4_eval_expression(context) {
    // "Viajes en transporte público estructurado unimodal" > 37 AND "Viajes en transporte público estructurado unimodal" <= 122

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes en transporte público estructurado unimodal']  > 37.0) && (feature.properties['Viajes en transporte público estructurado unimodal']  <= 122.0));
    } else {
        return ((feature['Viajes en transporte público estructurado unimodal']  > 37.0) && (feature['Viajes en transporte público estructurado unimodal']  <= 122.0));
    }
}


function exp_Viajesunimodalesentransportepblico_13rule0_eval_expression(context) {
    // "Viajes en transporte público unimodal" >= 0 AND "Viajes en transporte público unimodal" <= 24

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes en transporte público unimodal']  >= 0.0) && (feature.properties['Viajes en transporte público unimodal']  <= 24.0));
    } else {
        return ((feature['Viajes en transporte público unimodal']  >= 0.0) && (feature['Viajes en transporte público unimodal']  <= 24.0));
    }
}


function exp_Viajesunimodalesentransportepblico_13rule1_eval_expression(context) {
    // "Viajes en transporte público unimodal" > 24 AND "Viajes en transporte público unimodal" <= 87

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes en transporte público unimodal']  > 24.0) && (feature.properties['Viajes en transporte público unimodal']  <= 87.0));
    } else {
        return ((feature['Viajes en transporte público unimodal']  > 24.0) && (feature['Viajes en transporte público unimodal']  <= 87.0));
    }
}


function exp_Viajesunimodalesentransportepblico_13rule2_eval_expression(context) {
    // "Viajes en transporte público unimodal" > 87 AND "Viajes en transporte público unimodal" <= 197

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes en transporte público unimodal']  > 87.0) && (feature.properties['Viajes en transporte público unimodal']  <= 197.0));
    } else {
        return ((feature['Viajes en transporte público unimodal']  > 87.0) && (feature['Viajes en transporte público unimodal']  <= 197.0));
    }
}


function exp_Viajesunimodalesentransportepblico_13rule3_eval_expression(context) {
    // "Viajes en transporte público unimodal" > 197 AND "Viajes en transporte público unimodal" <= 461

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes en transporte público unimodal']  > 197.0) && (feature.properties['Viajes en transporte público unimodal']  <= 461.0));
    } else {
        return ((feature['Viajes en transporte público unimodal']  > 197.0) && (feature['Viajes en transporte público unimodal']  <= 461.0));
    }
}


function exp_Viajesunimodalesentransportepblico_13rule4_eval_expression(context) {
    // "Viajes en transporte público unimodal" > 461 AND "Viajes en transporte público unimodal" <= 1368

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes en transporte público unimodal']  > 461.0) && (feature.properties['Viajes en transporte público unimodal']  <= 1368.0));
    } else {
        return ((feature['Viajes en transporte público unimodal']  > 461.0) && (feature['Viajes en transporte público unimodal']  <= 1368.0));
    }
}


function exp_Viajesenauto_14rule0_eval_expression(context) {
    // "Número de viajes en auto" >= 0 AND "Número de viajes en auto" <= 1

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Número de viajes en auto']  >= 0.0) && (feature.properties['Número de viajes en auto']  <= 1.0));
    } else {
        return ((feature['Número de viajes en auto']  >= 0.0) && (feature['Número de viajes en auto']  <= 1.0));
    }
}


function exp_Viajesenauto_14rule1_eval_expression(context) {
    // "Número de viajes en auto" > 1 AND "Número de viajes en auto" <= 3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Número de viajes en auto']  > 1.0) && (feature.properties['Número de viajes en auto']  <= 3.0));
    } else {
        return ((feature['Número de viajes en auto']  > 1.0) && (feature['Número de viajes en auto']  <= 3.0));
    }
}


function exp_Viajesenauto_14rule2_eval_expression(context) {
    // "Número de viajes en auto" > 3 AND "Número de viajes en auto" <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Número de viajes en auto']  > 3.0) && (feature.properties['Número de viajes en auto']  <= 10.0));
    } else {
        return ((feature['Número de viajes en auto']  > 3.0) && (feature['Número de viajes en auto']  <= 10.0));
    }
}


function exp_Viajesenauto_14rule3_eval_expression(context) {
    // "Número de viajes en auto" > 10 AND "Número de viajes en auto" <= 14

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Número de viajes en auto']  > 10.0) && (feature.properties['Número de viajes en auto']  <= 14.0));
    } else {
        return ((feature['Número de viajes en auto']  > 10.0) && (feature['Número de viajes en auto']  <= 14.0));
    }
}


function exp_Viajesdemovilidadactiva_15rule0_eval_expression(context) {
    // "Viajes de movilidad activa" >= 0 AND "Viajes de movilidad activa" <= 1

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes de movilidad activa']  >= 0.0) && (feature.properties['Viajes de movilidad activa']  <= 1.0));
    } else {
        return ((feature['Viajes de movilidad activa']  >= 0.0) && (feature['Viajes de movilidad activa']  <= 1.0));
    }
}


function exp_Viajesdemovilidadactiva_15rule1_eval_expression(context) {
    // "Viajes de movilidad activa" > 1 AND "Viajes de movilidad activa" <= 8

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes de movilidad activa']  > 1.0) && (feature.properties['Viajes de movilidad activa']  <= 8.0));
    } else {
        return ((feature['Viajes de movilidad activa']  > 1.0) && (feature['Viajes de movilidad activa']  <= 8.0));
    }
}


function exp_Viajesdemovilidadactiva_15rule2_eval_expression(context) {
    // "Viajes de movilidad activa" > 8 AND "Viajes de movilidad activa" <= 20

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Viajes de movilidad activa']  > 8.0) && (feature.properties['Viajes de movilidad activa']  <= 20.0));
    } else {
        return ((feature['Viajes de movilidad activa']  > 8.0) && (feature['Viajes de movilidad activa']  <= 20.0));
    }
}


function exp_Totaldeviajesreportadosporlaencuesta_16rule0_eval_expression(context) {
    // "Número total de viajes" >= 1 AND "Número total de viajes" <= 35

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Número total de viajes']  >= 1.0) && (feature.properties['Número total de viajes']  <= 35.0));
    } else {
        return ((feature['Número total de viajes']  >= 1.0) && (feature['Número total de viajes']  <= 35.0));
    }
}


function exp_Totaldeviajesreportadosporlaencuesta_16rule1_eval_expression(context) {
    // "Número total de viajes" > 35 AND "Número total de viajes" <= 138

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Número total de viajes']  > 35.0) && (feature.properties['Número total de viajes']  <= 138.0));
    } else {
        return ((feature['Número total de viajes']  > 35.0) && (feature['Número total de viajes']  <= 138.0));
    }
}


function exp_Totaldeviajesreportadosporlaencuesta_16rule2_eval_expression(context) {
    // "Número total de viajes" > 138 AND "Número total de viajes" <= 351

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Número total de viajes']  > 138.0) && (feature.properties['Número total de viajes']  <= 351.0));
    } else {
        return ((feature['Número total de viajes']  > 138.0) && (feature['Número total de viajes']  <= 351.0));
    }
}


function exp_Totaldeviajesreportadosporlaencuesta_16rule3_eval_expression(context) {
    // "Número total de viajes" > 351 AND "Número total de viajes" <= 685

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Número total de viajes']  > 351.0) && (feature.properties['Número total de viajes']  <= 685.0));
    } else {
        return ((feature['Número total de viajes']  > 351.0) && (feature['Número total de viajes']  <= 685.0));
    }
}


function exp_Totaldeviajesreportadosporlaencuesta_16rule4_eval_expression(context) {
    // "Número total de viajes" > 685 AND "Número total de viajes" <= 1763

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Número total de viajes']  > 685.0) && (feature.properties['Número total de viajes']  <= 1763.0));
    } else {
        return ((feature['Número total de viajes']  > 685.0) && (feature['Número total de viajes']  <= 1763.0));
    }
}


function exp_Personasqueviajandoentransportepblicoestructuradohansufridodiscriminacinporcondicinsocialetniayognero_17rule0_eval_expression(context) {
    // DISCR_SOCGEN_TPE >= 1 AND DISCR_SOCGEN_TPE <= 2

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['DISCR_SOCGEN_TPE']  >= 1.0) && (feature.properties['DISCR_SOCGEN_TPE']  <= 2.0));
    } else {
        return ((feature['DISCR_SOCGEN_TPE']  >= 1.0) && (feature['DISCR_SOCGEN_TPE']  <= 2.0));
    }
}


function exp_Personasqueviajandoentransportepblicoestructuradohansufridodiscriminacinporcondicinsocialetniayognero_17rule1_eval_expression(context) {
    // DISCR_SOCGEN_TPE > 2 AND DISCR_SOCGEN_TPE <= 8

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['DISCR_SOCGEN_TPE']  > 2.0) && (feature.properties['DISCR_SOCGEN_TPE']  <= 8.0));
    } else {
        return ((feature['DISCR_SOCGEN_TPE']  > 2.0) && (feature['DISCR_SOCGEN_TPE']  <= 8.0));
    }
}


function exp_Personasqueviajandoentransportepblicoestructuradohansufridodiscriminacinporcondicinsocialetniayognero_17rule2_eval_expression(context) {
    // DISCR_SOCGEN_TPE > 8 AND DISCR_SOCGEN_TPE <= 31

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['DISCR_SOCGEN_TPE']  > 8.0) && (feature.properties['DISCR_SOCGEN_TPE']  <= 31.0));
    } else {
        return ((feature['DISCR_SOCGEN_TPE']  > 8.0) && (feature['DISCR_SOCGEN_TPE']  <= 31.0));
    }
}


function exp_Personasqueviajandoentransportepblicoestructuradohansufridodiscriminacinporcondicinsocialetniayognero_17rule3_eval_expression(context) {
    // DISCR_SOCGEN_TPE > 31 AND DISCR_SOCGEN_TPE <= 118

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['DISCR_SOCGEN_TPE']  > 31.0) && (feature.properties['DISCR_SOCGEN_TPE']  <= 118.0));
    } else {
        return ((feature['DISCR_SOCGEN_TPE']  > 31.0) && (feature['DISCR_SOCGEN_TPE']  <= 118.0));
    }
}


function exp_Personasqueviajandoentransportepblicoestructuradohansufridodiscriminacinporcondicinsocialetniayognero_17rule4_eval_expression(context) {
    // DISCR_SOCGEN_TPE > 118 AND DISCR_SOCGEN_TPE <= 173

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['DISCR_SOCGEN_TPE']  > 118.0) && (feature.properties['DISCR_SOCGEN_TPE']  <= 173.0));
    } else {
        return ((feature['DISCR_SOCGEN_TPE']  > 118.0) && (feature['DISCR_SOCGEN_TPE']  <= 173.0));
    }
}


function exp_Personasqueviajandoentransportepblicoestructuradohansufridodiscriminacinporedadyodiscapacidad_18rule0_eval_expression(context) {
    // DISCR_EDADDISC_TPE >= 1 AND DISCR_EDADDISC_TPE <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['DISCR_EDADDISC_TPE']  >= 1.0) && (feature.properties['DISCR_EDADDISC_TPE']  <= 10.0));
    } else {
        return ((feature['DISCR_EDADDISC_TPE']  >= 1.0) && (feature['DISCR_EDADDISC_TPE']  <= 10.0));
    }
}


function exp_Personasqueviajandoentransportepblicoestructuradohansufridodiscriminacinporedadyodiscapacidad_18rule1_eval_expression(context) {
    // DISCR_EDADDISC_TPE > 10 AND DISCR_EDADDISC_TPE <= 38

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['DISCR_EDADDISC_TPE']  > 10.0) && (feature.properties['DISCR_EDADDISC_TPE']  <= 38.0));
    } else {
        return ((feature['DISCR_EDADDISC_TPE']  > 10.0) && (feature['DISCR_EDADDISC_TPE']  <= 38.0));
    }
}


function exp_Personasqueviajandoentransportepblicoestructuradohansufridodiscriminacinporedadyodiscapacidad_18rule2_eval_expression(context) {
    // DISCR_EDADDISC_TPE > 38 AND DISCR_EDADDISC_TPE <= 90

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['DISCR_EDADDISC_TPE']  > 38.0) && (feature.properties['DISCR_EDADDISC_TPE']  <= 90.0));
    } else {
        return ((feature['DISCR_EDADDISC_TPE']  > 38.0) && (feature['DISCR_EDADDISC_TPE']  <= 90.0));
    }
}


function exp_Personasqueviajandoentransportepblicoestructuradohansufridodiscriminacinporedadyodiscapacidad_18rule3_eval_expression(context) {
    // DISCR_EDADDISC_TPE > 90 AND DISCR_EDADDISC_TPE <= 230

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['DISCR_EDADDISC_TPE']  > 90.0) && (feature.properties['DISCR_EDADDISC_TPE']  <= 230.0));
    } else {
        return ((feature['DISCR_EDADDISC_TPE']  > 90.0) && (feature['DISCR_EDADDISC_TPE']  <= 230.0));
    }
}


function exp_Personasqueviajandoentransportepblicoestructuradohansufridodiscriminacinporedadyodiscapacidad_18rule4_eval_expression(context) {
    // DISCR_EDADDISC_TPE > 230 AND DISCR_EDADDISC_TPE <= 352

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['DISCR_EDADDISC_TPE']  > 230.0) && (feature.properties['DISCR_EDADDISC_TPE']  <= 352.0));
    } else {
        return ((feature['DISCR_EDADDISC_TPE']  > 230.0) && (feature['DISCR_EDADDISC_TPE']  <= 352.0));
    }
}


function exp_Personasqueviajandoentransportepbliconoestructuradohansufridodiscriminacinporcondicinsocialetniayognero_19rule0_eval_expression(context) {
    // DISCR_SOCGEN_TPNE >= 1 AND DISCR_SOCGEN_TPNE <= 7

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['DISCR_SOCGEN_TPNE']  >= 1.0) && (feature.properties['DISCR_SOCGEN_TPNE']  <= 7.0));
    } else {
        return ((feature['DISCR_SOCGEN_TPNE']  >= 1.0) && (feature['DISCR_SOCGEN_TPNE']  <= 7.0));
    }
}


function exp_Personasqueviajandoentransportepbliconoestructuradohansufridodiscriminacinporcondicinsocialetniayognero_19rule1_eval_expression(context) {
    // DISCR_SOCGEN_TPNE > 7 AND DISCR_SOCGEN_TPNE <= 26

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['DISCR_SOCGEN_TPNE']  > 7.0) && (feature.properties['DISCR_SOCGEN_TPNE']  <= 26.0));
    } else {
        return ((feature['DISCR_SOCGEN_TPNE']  > 7.0) && (feature['DISCR_SOCGEN_TPNE']  <= 26.0));
    }
}


function exp_Personasqueviajandoentransportepbliconoestructuradohansufridodiscriminacinporcondicinsocialetniayognero_19rule2_eval_expression(context) {
    // DISCR_SOCGEN_TPNE > 26 AND DISCR_SOCGEN_TPNE <= 66

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['DISCR_SOCGEN_TPNE']  > 26.0) && (feature.properties['DISCR_SOCGEN_TPNE']  <= 66.0));
    } else {
        return ((feature['DISCR_SOCGEN_TPNE']  > 26.0) && (feature['DISCR_SOCGEN_TPNE']  <= 66.0));
    }
}


function exp_Personasqueviajandoentransportepbliconoestructuradohansufridodiscriminacinporcondicinsocialetniayognero_19rule3_eval_expression(context) {
    // DISCR_SOCGEN_TPNE > 66 AND DISCR_SOCGEN_TPNE <= 161

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['DISCR_SOCGEN_TPNE']  > 66.0) && (feature.properties['DISCR_SOCGEN_TPNE']  <= 161.0));
    } else {
        return ((feature['DISCR_SOCGEN_TPNE']  > 66.0) && (feature['DISCR_SOCGEN_TPNE']  <= 161.0));
    }
}


function exp_Personasqueviajandoentransportepbliconoestructuradohansufridodiscriminacinporcondicinsocialetniayognero_19rule4_eval_expression(context) {
    // DISCR_SOCGEN_TPNE > 161 AND DISCR_SOCGEN_TPNE <= 289

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['DISCR_SOCGEN_TPNE']  > 161.0) && (feature.properties['DISCR_SOCGEN_TPNE']  <= 289.0));
    } else {
        return ((feature['DISCR_SOCGEN_TPNE']  > 161.0) && (feature['DISCR_SOCGEN_TPNE']  <= 289.0));
    }
}


function exp_Personasqueviajandoentransportepbliconoestructuradohansufridodiscriminacinporedadyodiscapacidad_20rule0_eval_expression(context) {
    // DISCR_EDADDISC_TPNE >= 1 AND DISCR_EDADDISC_TPNE <= 18

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['DISCR_EDADDISC_TPNE']  >= 1.0) && (feature.properties['DISCR_EDADDISC_TPNE']  <= 18.0));
    } else {
        return ((feature['DISCR_EDADDISC_TPNE']  >= 1.0) && (feature['DISCR_EDADDISC_TPNE']  <= 18.0));
    }
}


function exp_Personasqueviajandoentransportepbliconoestructuradohansufridodiscriminacinporedadyodiscapacidad_20rule1_eval_expression(context) {
    // DISCR_EDADDISC_TPNE > 18 AND DISCR_EDADDISC_TPNE <= 78

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['DISCR_EDADDISC_TPNE']  > 18.0) && (feature.properties['DISCR_EDADDISC_TPNE']  <= 78.0));
    } else {
        return ((feature['DISCR_EDADDISC_TPNE']  > 18.0) && (feature['DISCR_EDADDISC_TPNE']  <= 78.0));
    }
}


function exp_Personasqueviajandoentransportepbliconoestructuradohansufridodiscriminacinporedadyodiscapacidad_20rule2_eval_expression(context) {
    // DISCR_EDADDISC_TPNE > 78 AND DISCR_EDADDISC_TPNE <= 208

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['DISCR_EDADDISC_TPNE']  > 78.0) && (feature.properties['DISCR_EDADDISC_TPNE']  <= 208.0));
    } else {
        return ((feature['DISCR_EDADDISC_TPNE']  > 78.0) && (feature['DISCR_EDADDISC_TPNE']  <= 208.0));
    }
}


function exp_Personasqueviajandoentransportepbliconoestructuradohansufridodiscriminacinporedadyodiscapacidad_20rule3_eval_expression(context) {
    // DISCR_EDADDISC_TPNE > 208 AND DISCR_EDADDISC_TPNE <= 608

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['DISCR_EDADDISC_TPNE']  > 208.0) && (feature.properties['DISCR_EDADDISC_TPNE']  <= 608.0));
    } else {
        return ((feature['DISCR_EDADDISC_TPNE']  > 208.0) && (feature['DISCR_EDADDISC_TPNE']  <= 608.0));
    }
}


function exp_Personasqueviajandoentransportepbliconoestructuradohansufridodiscriminacinporedadyodiscapacidad_20rule4_eval_expression(context) {
    // DISCR_EDADDISC_TPNE > 608 AND DISCR_EDADDISC_TPNE <= 1681

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['DISCR_EDADDISC_TPNE']  > 608.0) && (feature.properties['DISCR_EDADDISC_TPNE']  <= 1681.0));
    } else {
        return ((feature['DISCR_EDADDISC_TPNE']  > 608.0) && (feature['DISCR_EDADDISC_TPNE']  <= 1681.0));
    }
}


function exp_Personasqueenviajesdemovilidadactivahansufridodiscriminacinporcondicinsocialetniayognero_21rule0_eval_expression(context) {
    // DISCR_SOCGEN_MOVACT >= 1 AND DISCR_SOCGEN_MOVACT <= 4

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['DISCR_SOCGEN_MOVACT']  >= 1.0) && (feature.properties['DISCR_SOCGEN_MOVACT']  <= 4.0));
    } else {
        return ((feature['DISCR_SOCGEN_MOVACT']  >= 1.0) && (feature['DISCR_SOCGEN_MOVACT']  <= 4.0));
    }
}


function exp_Personasqueenviajesdemovilidadactivahansufridodiscriminacinporcondicinsocialetniayognero_21rule1_eval_expression(context) {
    // DISCR_SOCGEN_MOVACT > 4 AND DISCR_SOCGEN_MOVACT <= 13

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['DISCR_SOCGEN_MOVACT']  > 4.0) && (feature.properties['DISCR_SOCGEN_MOVACT']  <= 13.0));
    } else {
        return ((feature['DISCR_SOCGEN_MOVACT']  > 4.0) && (feature['DISCR_SOCGEN_MOVACT']  <= 13.0));
    }
}


function exp_Personasqueenviajesdemovilidadactivahansufridodiscriminacinporcondicinsocialetniayognero_21rule2_eval_expression(context) {
    // DISCR_SOCGEN_MOVACT > 13 AND DISCR_SOCGEN_MOVACT <= 24

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['DISCR_SOCGEN_MOVACT']  > 13.0) && (feature.properties['DISCR_SOCGEN_MOVACT']  <= 24.0));
    } else {
        return ((feature['DISCR_SOCGEN_MOVACT']  > 13.0) && (feature['DISCR_SOCGEN_MOVACT']  <= 24.0));
    }
}


function exp_Personasqueenviajesdemovilidadactivahansufridodiscriminacinporcondicinsocialetniayognero_21rule3_eval_expression(context) {
    // DISCR_SOCGEN_MOVACT > 24 AND DISCR_SOCGEN_MOVACT <= 71

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['DISCR_SOCGEN_MOVACT']  > 24.0) && (feature.properties['DISCR_SOCGEN_MOVACT']  <= 71.0));
    } else {
        return ((feature['DISCR_SOCGEN_MOVACT']  > 24.0) && (feature['DISCR_SOCGEN_MOVACT']  <= 71.0));
    }
}


function exp_Personasqueenviajesdemovilidadactivahansufridodiscriminacinporcondicinsocialetniayognero_21rule4_eval_expression(context) {
    // DISCR_SOCGEN_MOVACT > 71 AND DISCR_SOCGEN_MOVACT <= 94

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['DISCR_SOCGEN_MOVACT']  > 71.0) && (feature.properties['DISCR_SOCGEN_MOVACT']  <= 94.0));
    } else {
        return ((feature['DISCR_SOCGEN_MOVACT']  > 71.0) && (feature['DISCR_SOCGEN_MOVACT']  <= 94.0));
    }
}


function exp_Personasqueenviajesdemovilidadactivahansufridodiscriminacinporedadyodiscapacidad_22rule0_eval_expression(context) {
    // DISCR_EDADDISC_MOVAC >= 1 AND DISCR_EDADDISC_MOVAC <= 6

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['DISCR_EDADDISC_MOVAC']  >= 1.0) && (feature.properties['DISCR_EDADDISC_MOVAC']  <= 6.0));
    } else {
        return ((feature['DISCR_EDADDISC_MOVAC']  >= 1.0) && (feature['DISCR_EDADDISC_MOVAC']  <= 6.0));
    }
}


function exp_Personasqueenviajesdemovilidadactivahansufridodiscriminacinporedadyodiscapacidad_22rule1_eval_expression(context) {
    // DISCR_EDADDISC_MOVAC > 6 AND DISCR_EDADDISC_MOVAC <= 28

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['DISCR_EDADDISC_MOVAC']  > 6.0) && (feature.properties['DISCR_EDADDISC_MOVAC']  <= 28.0));
    } else {
        return ((feature['DISCR_EDADDISC_MOVAC']  > 6.0) && (feature['DISCR_EDADDISC_MOVAC']  <= 28.0));
    }
}


function exp_Personasqueenviajesdemovilidadactivahansufridodiscriminacinporedadyodiscapacidad_22rule2_eval_expression(context) {
    // DISCR_EDADDISC_MOVAC > 28 AND DISCR_EDADDISC_MOVAC <= 88

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['DISCR_EDADDISC_MOVAC']  > 28.0) && (feature.properties['DISCR_EDADDISC_MOVAC']  <= 88.0));
    } else {
        return ((feature['DISCR_EDADDISC_MOVAC']  > 28.0) && (feature['DISCR_EDADDISC_MOVAC']  <= 88.0));
    }
}


function exp_Personasqueenviajesdemovilidadactivahansufridodiscriminacinporedadyodiscapacidad_22rule3_eval_expression(context) {
    // DISCR_EDADDISC_MOVAC > 88 AND DISCR_EDADDISC_MOVAC <= 178

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['DISCR_EDADDISC_MOVAC']  > 88.0) && (feature.properties['DISCR_EDADDISC_MOVAC']  <= 178.0));
    } else {
        return ((feature['DISCR_EDADDISC_MOVAC']  > 88.0) && (feature['DISCR_EDADDISC_MOVAC']  <= 178.0));
    }
}


function exp_Personasqueenviajesdemovilidadactivahansufridodiscriminacinporedadyodiscapacidad_22rule4_eval_expression(context) {
    // DISCR_EDADDISC_MOVAC > 178 AND DISCR_EDADDISC_MOVAC <= 316

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['DISCR_EDADDISC_MOVAC']  > 178.0) && (feature.properties['DISCR_EDADDISC_MOVAC']  <= 316.0));
    } else {
        return ((feature['DISCR_EDADDISC_MOVAC']  > 178.0) && (feature['DISCR_EDADDISC_MOVAC']  <= 316.0));
    }
}


function exp_Personasqueviajandurantelanoche_23rule0_eval_expression(context) {
    // VIAJES_NOCHE >= 1 AND VIAJES_NOCHE <= 8

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIAJES_NOCHE']  >= 1.0) && (feature.properties['VIAJES_NOCHE']  <= 8.0));
    } else {
        return ((feature['VIAJES_NOCHE']  >= 1.0) && (feature['VIAJES_NOCHE']  <= 8.0));
    }
}


function exp_Personasqueviajandurantelanoche_23rule1_eval_expression(context) {
    // VIAJES_NOCHE > 8 AND VIAJES_NOCHE <= 16

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIAJES_NOCHE']  > 8.0) && (feature.properties['VIAJES_NOCHE']  <= 16.0));
    } else {
        return ((feature['VIAJES_NOCHE']  > 8.0) && (feature['VIAJES_NOCHE']  <= 16.0));
    }
}


function exp_Personasqueviajandurantelanoche_23rule2_eval_expression(context) {
    // VIAJES_NOCHE > 16 AND VIAJES_NOCHE <= 26

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIAJES_NOCHE']  > 16.0) && (feature.properties['VIAJES_NOCHE']  <= 26.0));
    } else {
        return ((feature['VIAJES_NOCHE']  > 16.0) && (feature['VIAJES_NOCHE']  <= 26.0));
    }
}


function exp_Personasqueviajandurantelanoche_23rule3_eval_expression(context) {
    // VIAJES_NOCHE > 26 AND VIAJES_NOCHE <= 59

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIAJES_NOCHE']  > 26.0) && (feature.properties['VIAJES_NOCHE']  <= 59.0));
    } else {
        return ((feature['VIAJES_NOCHE']  > 26.0) && (feature['VIAJES_NOCHE']  <= 59.0));
    }
}


function exp_Personasqueviajandurantelatarde_24rule0_eval_expression(context) {
    // VIAJES_TARDE >= 1 AND VIAJES_TARDE <= 11

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIAJES_TARDE']  >= 1.0) && (feature.properties['VIAJES_TARDE']  <= 11.0));
    } else {
        return ((feature['VIAJES_TARDE']  >= 1.0) && (feature['VIAJES_TARDE']  <= 11.0));
    }
}


function exp_Personasqueviajandurantelatarde_24rule1_eval_expression(context) {
    // VIAJES_TARDE > 11 AND VIAJES_TARDE <= 46

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIAJES_TARDE']  > 11.0) && (feature.properties['VIAJES_TARDE']  <= 46.0));
    } else {
        return ((feature['VIAJES_TARDE']  > 11.0) && (feature['VIAJES_TARDE']  <= 46.0));
    }
}


function exp_Personasqueviajandurantelatarde_24rule2_eval_expression(context) {
    // VIAJES_TARDE > 46 AND VIAJES_TARDE <= 109

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIAJES_TARDE']  > 46.0) && (feature.properties['VIAJES_TARDE']  <= 109.0));
    } else {
        return ((feature['VIAJES_TARDE']  > 46.0) && (feature['VIAJES_TARDE']  <= 109.0));
    }
}


function exp_Personasqueviajandurantelatarde_24rule3_eval_expression(context) {
    // VIAJES_TARDE > 109 AND VIAJES_TARDE <= 206

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIAJES_TARDE']  > 109.0) && (feature.properties['VIAJES_TARDE']  <= 206.0));
    } else {
        return ((feature['VIAJES_TARDE']  > 109.0) && (feature['VIAJES_TARDE']  <= 206.0));
    }
}


function exp_Personasqueviajandurantelatarde_24rule4_eval_expression(context) {
    // VIAJES_TARDE > 206 AND VIAJES_TARDE <= 825

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIAJES_TARDE']  > 206.0) && (feature.properties['VIAJES_TARDE']  <= 825.0));
    } else {
        return ((feature['VIAJES_TARDE']  > 206.0) && (feature['VIAJES_TARDE']  <= 825.0));
    }
}


function exp_Personasqueviajanasudestinodurantelamaana_25rule0_eval_expression(context) {
    // VIAJES_MAN >= 1 AND VIAJES_MAN <= 6

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIAJES_MAN']  >= 1.0) && (feature.properties['VIAJES_MAN']  <= 6.0));
    } else {
        return ((feature['VIAJES_MAN']  >= 1.0) && (feature['VIAJES_MAN']  <= 6.0));
    }
}


function exp_Personasqueviajanasudestinodurantelamaana_25rule1_eval_expression(context) {
    // VIAJES_MAN > 6 AND VIAJES_MAN <= 24

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIAJES_MAN']  > 6.0) && (feature.properties['VIAJES_MAN']  <= 24.0));
    } else {
        return ((feature['VIAJES_MAN']  > 6.0) && (feature['VIAJES_MAN']  <= 24.0));
    }
}


function exp_Personasqueviajanasudestinodurantelamaana_25rule2_eval_expression(context) {
    // VIAJES_MAN > 24 AND VIAJES_MAN <= 73

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIAJES_MAN']  > 24.0) && (feature.properties['VIAJES_MAN']  <= 73.0));
    } else {
        return ((feature['VIAJES_MAN']  > 24.0) && (feature['VIAJES_MAN']  <= 73.0));
    }
}


function exp_Personasqueviajanasudestinodurantelamaana_25rule3_eval_expression(context) {
    // VIAJES_MAN > 73 AND VIAJES_MAN <= 226

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIAJES_MAN']  > 73.0) && (feature.properties['VIAJES_MAN']  <= 226.0));
    } else {
        return ((feature['VIAJES_MAN']  > 73.0) && (feature['VIAJES_MAN']  <= 226.0));
    }
}


function exp_Personasqueviajanasudestinodurantelamaana_25rule4_eval_expression(context) {
    // VIAJES_MAN > 226 AND VIAJES_MAN <= 323

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIAJES_MAN']  > 226.0) && (feature.properties['VIAJES_MAN']  <= 323.0));
    } else {
        return ((feature['VIAJES_MAN']  > 226.0) && (feature['VIAJES_MAN']  <= 323.0));
    }
}


function exp_Personasqueviajanasudestinodurantelamadrugada_26rule0_eval_expression(context) {
    // VIAJES_MADR >= 1 AND VIAJES_MADR <= 14

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIAJES_MADR']  >= 1.0) && (feature.properties['VIAJES_MADR']  <= 14.0));
    } else {
        return ((feature['VIAJES_MADR']  >= 1.0) && (feature['VIAJES_MADR']  <= 14.0));
    }
}


function exp_Personasqueviajanasudestinodurantelamadrugada_26rule1_eval_expression(context) {
    // VIAJES_MADR > 14 AND VIAJES_MADR <= 44

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIAJES_MADR']  > 14.0) && (feature.properties['VIAJES_MADR']  <= 44.0));
    } else {
        return ((feature['VIAJES_MADR']  > 14.0) && (feature['VIAJES_MADR']  <= 44.0));
    }
}


function exp_Personasqueviajanasudestinodurantelamadrugada_26rule2_eval_expression(context) {
    // VIAJES_MADR > 44 AND VIAJES_MADR <= 109

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIAJES_MADR']  > 44.0) && (feature.properties['VIAJES_MADR']  <= 109.0));
    } else {
        return ((feature['VIAJES_MADR']  > 44.0) && (feature['VIAJES_MADR']  <= 109.0));
    }
}


function exp_Personasqueviajanasudestinodurantelamadrugada_26rule3_eval_expression(context) {
    // VIAJES_MADR > 109 AND VIAJES_MADR <= 384

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIAJES_MADR']  > 109.0) && (feature.properties['VIAJES_MADR']  <= 384.0));
    } else {
        return ((feature['VIAJES_MADR']  > 109.0) && (feature['VIAJES_MADR']  <= 384.0));
    }
}


function exp_Personasqueviajanasudestinodurantelamadrugada_26rule4_eval_expression(context) {
    // VIAJES_MADR > 384 AND VIAJES_MADR <= 1092

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIAJES_MADR']  > 384.0) && (feature.properties['VIAJES_MADR']  <= 1092.0));
    } else {
        return ((feature['VIAJES_MADR']  > 384.0) && (feature['VIAJES_MADR']  <= 1092.0));
    }
}


function exp_Duracinpromediodeviajesminutos_27rule0_eval_expression(context) {
    // "Duración de viajes (minuto)" >= 30 AND "Duración de viajes (minuto)" <= 60

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Duración de viajes (minuto)']  >= 30.0) && (feature.properties['Duración de viajes (minuto)']  <= 60.0));
    } else {
        return ((feature['Duración de viajes (minuto)']  >= 30.0) && (feature['Duración de viajes (minuto)']  <= 60.0));
    }
}


function exp_Duracinpromediodeviajesminutos_27rule1_eval_expression(context) {
    // "Duración de viajes (minuto)" > 60 AND "Duración de viajes (minuto)" <= 120

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Duración de viajes (minuto)']  > 60.0) && (feature.properties['Duración de viajes (minuto)']  <= 120.0));
    } else {
        return ((feature['Duración de viajes (minuto)']  > 60.0) && (feature['Duración de viajes (minuto)']  <= 120.0));
    }
}


function exp_Duracinpromediodeviajesminutos_27rule2_eval_expression(context) {
    // "Duración de viajes (minuto)" > 120 AND "Duración de viajes (minuto)" <= 180

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Duración de viajes (minuto)']  > 120.0) && (feature.properties['Duración de viajes (minuto)']  <= 180.0));
    } else {
        return ((feature['Duración de viajes (minuto)']  > 120.0) && (feature['Duración de viajes (minuto)']  <= 180.0));
    }
}


function exp_Duracinpromediodeviajesminutos_27rule3_eval_expression(context) {
    // "Duración de viajes (minuto)" > 180 AND "Duración de viajes (minuto)" <= 240

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Duración de viajes (minuto)']  > 180.0) && (feature.properties['Duración de viajes (minuto)']  <= 240.0));
    } else {
        return ((feature['Duración de viajes (minuto)']  > 180.0) && (feature['Duración de viajes (minuto)']  <= 240.0));
    }
}


function exp_Tiempodeesperapromedioparaabordareltransportepblicominutos_28rule0_eval_expression(context) {
    // "Minutos de espera" >= 4.5 AND "Minutos de espera" <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Minutos de espera']  >= 4.5) && (feature.properties['Minutos de espera']  <= 5.0));
    } else {
        return ((feature['Minutos de espera']  >= 4.5) && (feature['Minutos de espera']  <= 5.0));
    }
}


function exp_Tiempodeesperapromedioparaabordareltransportepblicominutos_28rule1_eval_expression(context) {
    // "Minutos de espera" > 5 AND "Minutos de espera" <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Minutos de espera']  > 5.0) && (feature.properties['Minutos de espera']  <= 10.0));
    } else {
        return ((feature['Minutos de espera']  > 5.0) && (feature['Minutos de espera']  <= 10.0));
    }
}


function exp_Tiempodeesperapromedioparaabordareltransportepblicominutos_28rule2_eval_expression(context) {
    // "Minutos de espera" > 10 AND "Minutos de espera" <= 15

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Minutos de espera']  > 10.0) && (feature.properties['Minutos de espera']  <= 15.0));
    } else {
        return ((feature['Minutos de espera']  > 10.0) && (feature['Minutos de espera']  <= 15.0));
    }
}


function exp_Tiempodeesperapromedioparaabordareltransportepblicominutos_28rule3_eval_expression(context) {
    // "Minutos de espera" > 15 AND "Minutos de espera" <= 16

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['Minutos de espera']  > 15.0) && (feature.properties['Minutos de espera']  <= 16.0));
    } else {
        return ((feature['Minutos de espera']  > 15.0) && (feature['Minutos de espera']  <= 16.0));
    }
}


function exp_Personasqueenviajesentransportepbliconoestructuradosufrieronviolenciadegnero_30rule0_eval_expression(context) {
    // VIOGEN_TPNE >= 0 AND VIOGEN_TPNE <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIOGEN_TPNE']  >= 0.0) && (feature.properties['VIOGEN_TPNE']  <= 10.0));
    } else {
        return ((feature['VIOGEN_TPNE']  >= 0.0) && (feature['VIOGEN_TPNE']  <= 10.0));
    }
}


function exp_Personasqueenviajesentransportepbliconoestructuradosufrieronviolenciadegnero_30rule1_eval_expression(context) {
    // VIOGEN_TPNE > 10 AND VIOGEN_TPNE <= 41

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIOGEN_TPNE']  > 10.0) && (feature.properties['VIOGEN_TPNE']  <= 41.0));
    } else {
        return ((feature['VIOGEN_TPNE']  > 10.0) && (feature['VIOGEN_TPNE']  <= 41.0));
    }
}


function exp_Personasqueenviajesentransportepbliconoestructuradosufrieronviolenciadegnero_30rule2_eval_expression(context) {
    // VIOGEN_TPNE > 41 AND VIOGEN_TPNE <= 133

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIOGEN_TPNE']  > 41.0) && (feature.properties['VIOGEN_TPNE']  <= 133.0));
    } else {
        return ((feature['VIOGEN_TPNE']  > 41.0) && (feature['VIOGEN_TPNE']  <= 133.0));
    }
}


function exp_Personasqueenviajesentransportepbliconoestructuradosufrieronviolenciadegnero_30rule3_eval_expression(context) {
    // VIOGEN_TPNE > 133 AND VIOGEN_TPNE <= 314

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIOGEN_TPNE']  > 133.0) && (feature.properties['VIOGEN_TPNE']  <= 314.0));
    } else {
        return ((feature['VIOGEN_TPNE']  > 133.0) && (feature['VIOGEN_TPNE']  <= 314.0));
    }
}


function exp_Personasqueenviajesentransportepbliconoestructuradosufrieronviolenciadegnero_30rule4_eval_expression(context) {
    // VIOGEN_TPNE > 314 AND VIOGEN_TPNE <= 578

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIOGEN_TPNE']  > 314.0) && (feature.properties['VIOGEN_TPNE']  <= 578.0));
    } else {
        return ((feature['VIOGEN_TPNE']  > 314.0) && (feature['VIOGEN_TPNE']  <= 578.0));
    }
}


function exp_Personasqueenviajesentransportepblicoestructuradosufrieronviolenciadegnero_31rule0_eval_expression(context) {
    // VIOGEN_TPE >= 0 AND VIOGEN_TPE <= 2

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIOGEN_TPE']  >= 0.0) && (feature.properties['VIOGEN_TPE']  <= 2.0));
    } else {
        return ((feature['VIOGEN_TPE']  >= 0.0) && (feature['VIOGEN_TPE']  <= 2.0));
    }
}


function exp_Personasqueenviajesentransportepblicoestructuradosufrieronviolenciadegnero_31rule1_eval_expression(context) {
    // VIOGEN_TPE > 2 AND VIOGEN_TPE <= 9

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIOGEN_TPE']  > 2.0) && (feature.properties['VIOGEN_TPE']  <= 9.0));
    } else {
        return ((feature['VIOGEN_TPE']  > 2.0) && (feature['VIOGEN_TPE']  <= 9.0));
    }
}


function exp_Personasqueenviajesentransportepblicoestructuradosufrieronviolenciadegnero_31rule2_eval_expression(context) {
    // VIOGEN_TPE > 9 AND VIOGEN_TPE <= 33

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIOGEN_TPE']  > 9.0) && (feature.properties['VIOGEN_TPE']  <= 33.0));
    } else {
        return ((feature['VIOGEN_TPE']  > 9.0) && (feature['VIOGEN_TPE']  <= 33.0));
    }
}


function exp_Personasqueenviajesentransportepblicoestructuradosufrieronviolenciadegnero_31rule3_eval_expression(context) {
    // VIOGEN_TPE > 33 AND VIOGEN_TPE <= 81

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIOGEN_TPE']  > 33.0) && (feature.properties['VIOGEN_TPE']  <= 81.0));
    } else {
        return ((feature['VIOGEN_TPE']  > 33.0) && (feature['VIOGEN_TPE']  <= 81.0));
    }
}


function exp_Personasqueenviajesentransportepblicoestructuradosufrieronviolenciadegnero_31rule4_eval_expression(context) {
    // VIOGEN_TPE > 81 AND VIOGEN_TPE <= 125

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIOGEN_TPE']  > 81.0) && (feature.properties['VIOGEN_TPE']  <= 125.0));
    } else {
        return ((feature['VIOGEN_TPE']  > 81.0) && (feature['VIOGEN_TPE']  <= 125.0));
    }
}


function exp_Personasqueenviajesdemovilidadactivasufrieronviolenciadegnero_32rule0_eval_expression(context) {
    // VIOGEN_MOVACT >= 1 AND VIOGEN_MOVACT <= 4

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIOGEN_MOVACT']  >= 1.0) && (feature.properties['VIOGEN_MOVACT']  <= 4.0));
    } else {
        return ((feature['VIOGEN_MOVACT']  >= 1.0) && (feature['VIOGEN_MOVACT']  <= 4.0));
    }
}


function exp_Personasqueenviajesdemovilidadactivasufrieronviolenciadegnero_32rule1_eval_expression(context) {
    // VIOGEN_MOVACT > 4 AND VIOGEN_MOVACT <= 18

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIOGEN_MOVACT']  > 4.0) && (feature.properties['VIOGEN_MOVACT']  <= 18.0));
    } else {
        return ((feature['VIOGEN_MOVACT']  > 4.0) && (feature['VIOGEN_MOVACT']  <= 18.0));
    }
}


function exp_Personasqueenviajesdemovilidadactivasufrieronviolenciadegnero_32rule2_eval_expression(context) {
    // VIOGEN_MOVACT > 18 AND VIOGEN_MOVACT <= 56

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIOGEN_MOVACT']  > 18.0) && (feature.properties['VIOGEN_MOVACT']  <= 56.0));
    } else {
        return ((feature['VIOGEN_MOVACT']  > 18.0) && (feature['VIOGEN_MOVACT']  <= 56.0));
    }
}


function exp_Personasqueenviajesdemovilidadactivasufrieronviolenciadegnero_32rule3_eval_expression(context) {
    // VIOGEN_MOVACT > 56 AND VIOGEN_MOVACT <= 177

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIOGEN_MOVACT']  > 56.0) && (feature.properties['VIOGEN_MOVACT']  <= 177.0));
    } else {
        return ((feature['VIOGEN_MOVACT']  > 56.0) && (feature['VIOGEN_MOVACT']  <= 177.0));
    }
}


function exp_Personasqueenviajesdemovilidadactivasufrieronviolenciadegnero_32rule4_eval_expression(context) {
    // VIOGEN_MOVACT > 177 AND VIOGEN_MOVACT <= 274

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIOGEN_MOVACT']  > 177.0) && (feature.properties['VIOGEN_MOVACT']  <= 274.0));
    } else {
        return ((feature['VIOGEN_MOVACT']  > 177.0) && (feature['VIOGEN_MOVACT']  <= 274.0));
    }
}


function exp_Personasqueviajandoentransportepbliconoestructuradohansufridoviolenciayorobos_33rule0_eval_expression(context) {
    // VIOROBO_TPNE >= 1 AND VIOROBO_TPNE <= 6

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIOROBO_TPNE']  >= 1.0) && (feature.properties['VIOROBO_TPNE']  <= 6.0));
    } else {
        return ((feature['VIOROBO_TPNE']  >= 1.0) && (feature['VIOROBO_TPNE']  <= 6.0));
    }
}


function exp_Personasqueviajandoentransportepbliconoestructuradohansufridoviolenciayorobos_33rule1_eval_expression(context) {
    // VIOROBO_TPNE > 6 AND VIOROBO_TPNE <= 30

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIOROBO_TPNE']  > 6.0) && (feature.properties['VIOROBO_TPNE']  <= 30.0));
    } else {
        return ((feature['VIOROBO_TPNE']  > 6.0) && (feature['VIOROBO_TPNE']  <= 30.0));
    }
}


function exp_Personasqueviajandoentransportepbliconoestructuradohansufridoviolenciayorobos_33rule2_eval_expression(context) {
    // VIOROBO_TPNE > 30 AND VIOROBO_TPNE <= 124

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIOROBO_TPNE']  > 30.0) && (feature.properties['VIOROBO_TPNE']  <= 124.0));
    } else {
        return ((feature['VIOROBO_TPNE']  > 30.0) && (feature['VIOROBO_TPNE']  <= 124.0));
    }
}


function exp_Personasqueviajandoentransportepbliconoestructuradohansufridoviolenciayorobos_33rule3_eval_expression(context) {
    // VIOROBO_TPNE > 124 AND VIOROBO_TPNE <= 209

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIOROBO_TPNE']  > 124.0) && (feature.properties['VIOROBO_TPNE']  <= 209.0));
    } else {
        return ((feature['VIOROBO_TPNE']  > 124.0) && (feature['VIOROBO_TPNE']  <= 209.0));
    }
}


function exp_Personasqueviajandoentransportepbliconoestructuradohansufridoviolenciayorobos_33rule4_eval_expression(context) {
    // VIOROBO_TPNE > 209 AND VIOROBO_TPNE <= 303

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIOROBO_TPNE']  > 209.0) && (feature.properties['VIOROBO_TPNE']  <= 303.0));
    } else {
        return ((feature['VIOROBO_TPNE']  > 209.0) && (feature['VIOROBO_TPNE']  <= 303.0));
    }
}


function exp_Personasqueviajandoentransportepbliconoestructuradohansufridoaccidentes_34rule0_eval_expression(context) {
    // ACCI_TPNE >= 0 AND ACCI_TPNE <= 3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['ACCI_TPNE']  >= 0.0) && (feature.properties['ACCI_TPNE']  <= 3.0));
    } else {
        return ((feature['ACCI_TPNE']  >= 0.0) && (feature['ACCI_TPNE']  <= 3.0));
    }
}


function exp_Personasqueviajandoentransportepbliconoestructuradohansufridoaccidentes_34rule1_eval_expression(context) {
    // ACCI_TPNE > 3 AND ACCI_TPNE <= 10

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['ACCI_TPNE']  > 3.0) && (feature.properties['ACCI_TPNE']  <= 10.0));
    } else {
        return ((feature['ACCI_TPNE']  > 3.0) && (feature['ACCI_TPNE']  <= 10.0));
    }
}


function exp_Personasqueviajandoentransportepbliconoestructuradohansufridoaccidentes_34rule2_eval_expression(context) {
    // ACCI_TPNE > 10 AND ACCI_TPNE <= 23

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['ACCI_TPNE']  > 10.0) && (feature.properties['ACCI_TPNE']  <= 23.0));
    } else {
        return ((feature['ACCI_TPNE']  > 10.0) && (feature['ACCI_TPNE']  <= 23.0));
    }
}


function exp_Personasqueviajandoentransportepbliconoestructuradohansufridoaccidentes_34rule3_eval_expression(context) {
    // ACCI_TPNE > 23 AND ACCI_TPNE <= 56

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['ACCI_TPNE']  > 23.0) && (feature.properties['ACCI_TPNE']  <= 56.0));
    } else {
        return ((feature['ACCI_TPNE']  > 23.0) && (feature['ACCI_TPNE']  <= 56.0));
    }
}


function exp_Personasqueviajandoentransportepbliconoestructuradohansufridoaccidentes_34rule4_eval_expression(context) {
    // ACCI_TPNE > 56 AND ACCI_TPNE <= 110

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['ACCI_TPNE']  > 56.0) && (feature.properties['ACCI_TPNE']  <= 110.0));
    } else {
        return ((feature['ACCI_TPNE']  > 56.0) && (feature['ACCI_TPNE']  <= 110.0));
    }
}


function exp_Personasqueviajandoentransportepblicoestructuradohansufridoviolenciayorobos_35rule0_eval_expression(context) {
    // VIOROBO_TPE >= 1 AND VIOROBO_TPE <= 8

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIOROBO_TPE']  >= 1.0) && (feature.properties['VIOROBO_TPE']  <= 8.0));
    } else {
        return ((feature['VIOROBO_TPE']  >= 1.0) && (feature['VIOROBO_TPE']  <= 8.0));
    }
}


function exp_Personasqueviajandoentransportepblicoestructuradohansufridoviolenciayorobos_35rule1_eval_expression(context) {
    // VIOROBO_TPE > 8 AND VIOROBO_TPE <= 31

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIOROBO_TPE']  > 8.0) && (feature.properties['VIOROBO_TPE']  <= 31.0));
    } else {
        return ((feature['VIOROBO_TPE']  > 8.0) && (feature['VIOROBO_TPE']  <= 31.0));
    }
}


function exp_Personasqueviajandoentransportepblicoestructuradohansufridoviolenciayorobos_35rule2_eval_expression(context) {
    // VIOROBO_TPE > 31 AND VIOROBO_TPE <= 81

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIOROBO_TPE']  > 31.0) && (feature.properties['VIOROBO_TPE']  <= 81.0));
    } else {
        return ((feature['VIOROBO_TPE']  > 31.0) && (feature['VIOROBO_TPE']  <= 81.0));
    }
}


function exp_Personasqueviajandoentransportepblicoestructuradohansufridoviolenciayorobos_35rule3_eval_expression(context) {
    // VIOROBO_TPE > 81 AND VIOROBO_TPE <= 295

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIOROBO_TPE']  > 81.0) && (feature.properties['VIOROBO_TPE']  <= 295.0));
    } else {
        return ((feature['VIOROBO_TPE']  > 81.0) && (feature['VIOROBO_TPE']  <= 295.0));
    }
}


function exp_Personasqueviajandoentransportepblicoestructuradohansufridoviolenciayorobos_35rule4_eval_expression(context) {
    // VIOROBO_TPE > 295 AND VIOROBO_TPE <= 371

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIOROBO_TPE']  > 295.0) && (feature.properties['VIOROBO_TPE']  <= 371.0));
    } else {
        return ((feature['VIOROBO_TPE']  > 295.0) && (feature['VIOROBO_TPE']  <= 371.0));
    }
}


function exp_Personasqueviajandoentransportepblicoestructuradohansufridoaccidentes_36rule0_eval_expression(context) {
    // ACCI_TPE >= 0 AND ACCI_TPE <= 1

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['ACCI_TPE']  >= 0.0) && (feature.properties['ACCI_TPE']  <= 1.0));
    } else {
        return ((feature['ACCI_TPE']  >= 0.0) && (feature['ACCI_TPE']  <= 1.0));
    }
}


function exp_Personasqueviajandoentransportepblicoestructuradohansufridoaccidentes_36rule1_eval_expression(context) {
    // ACCI_TPE > 1 AND ACCI_TPE <= 4

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['ACCI_TPE']  > 1.0) && (feature.properties['ACCI_TPE']  <= 4.0));
    } else {
        return ((feature['ACCI_TPE']  > 1.0) && (feature['ACCI_TPE']  <= 4.0));
    }
}


function exp_Personasqueviajandoentransportepblicoestructuradohansufridoaccidentes_36rule2_eval_expression(context) {
    // ACCI_TPE > 4 AND ACCI_TPE <= 15

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['ACCI_TPE']  > 4.0) && (feature.properties['ACCI_TPE']  <= 15.0));
    } else {
        return ((feature['ACCI_TPE']  > 4.0) && (feature['ACCI_TPE']  <= 15.0));
    }
}


function exp_Personasqueviajandoentransportepblicoestructuradohansufridoaccidentes_36rule3_eval_expression(context) {
    // ACCI_TPE > 15 AND ACCI_TPE <= 25

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['ACCI_TPE']  > 15.0) && (feature.properties['ACCI_TPE']  <= 25.0));
    } else {
        return ((feature['ACCI_TPE']  > 15.0) && (feature['ACCI_TPE']  <= 25.0));
    }
}


function exp_Personasqueenviajesdemovilidadactivahansufridoviolenciayorobos_37rule0_eval_expression(context) {
    // VIOROBO_MOVACT >= 1 AND VIOROBO_MOVACT <= 12

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIOROBO_MOVACT']  >= 1.0) && (feature.properties['VIOROBO_MOVACT']  <= 12.0));
    } else {
        return ((feature['VIOROBO_MOVACT']  >= 1.0) && (feature['VIOROBO_MOVACT']  <= 12.0));
    }
}


function exp_Personasqueenviajesdemovilidadactivahansufridoviolenciayorobos_37rule1_eval_expression(context) {
    // VIOROBO_MOVACT > 12 AND VIOROBO_MOVACT <= 37

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIOROBO_MOVACT']  > 12.0) && (feature.properties['VIOROBO_MOVACT']  <= 37.0));
    } else {
        return ((feature['VIOROBO_MOVACT']  > 12.0) && (feature['VIOROBO_MOVACT']  <= 37.0));
    }
}


function exp_Personasqueenviajesdemovilidadactivahansufridoviolenciayorobos_37rule2_eval_expression(context) {
    // VIOROBO_MOVACT > 37 AND VIOROBO_MOVACT <= 61

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIOROBO_MOVACT']  > 37.0) && (feature.properties['VIOROBO_MOVACT']  <= 61.0));
    } else {
        return ((feature['VIOROBO_MOVACT']  > 37.0) && (feature['VIOROBO_MOVACT']  <= 61.0));
    }
}


function exp_Personasqueenviajesdemovilidadactivahansufridoviolenciayorobos_37rule3_eval_expression(context) {
    // VIOROBO_MOVACT > 61 AND VIOROBO_MOVACT <= 253

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIOROBO_MOVACT']  > 61.0) && (feature.properties['VIOROBO_MOVACT']  <= 253.0));
    } else {
        return ((feature['VIOROBO_MOVACT']  > 61.0) && (feature['VIOROBO_MOVACT']  <= 253.0));
    }
}


function exp_Personasqueenviajesdemovilidadactivahansufridoviolenciayorobos_37rule4_eval_expression(context) {
    // VIOROBO_MOVACT > 253 AND VIOROBO_MOVACT <= 347

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['VIOROBO_MOVACT']  > 253.0) && (feature.properties['VIOROBO_MOVACT']  <= 347.0));
    } else {
        return ((feature['VIOROBO_MOVACT']  > 253.0) && (feature['VIOROBO_MOVACT']  <= 347.0));
    }
}


function exp_Personasqueenviajesdemovilidadactivahansufridoaccidentes_38rule0_eval_expression(context) {
    // ACCI_MOVACT >= 0 AND ACCI_MOVACT <= 1

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['ACCI_MOVACT']  >= 0.0) && (feature.properties['ACCI_MOVACT']  <= 1.0));
    } else {
        return ((feature['ACCI_MOVACT']  >= 0.0) && (feature['ACCI_MOVACT']  <= 1.0));
    }
}


function exp_Personasqueenviajesdemovilidadactivahansufridoaccidentes_38rule1_eval_expression(context) {
    // ACCI_MOVACT > 1 AND ACCI_MOVACT <= 7

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['ACCI_MOVACT']  > 1.0) && (feature.properties['ACCI_MOVACT']  <= 7.0));
    } else {
        return ((feature['ACCI_MOVACT']  > 1.0) && (feature['ACCI_MOVACT']  <= 7.0));
    }
}


function exp_Personasqueenviajesdemovilidadactivahansufridoaccidentes_38rule2_eval_expression(context) {
    // ACCI_MOVACT > 7 AND ACCI_MOVACT <= 14

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['ACCI_MOVACT']  > 7.0) && (feature.properties['ACCI_MOVACT']  <= 14.0));
    } else {
        return ((feature['ACCI_MOVACT']  > 7.0) && (feature['ACCI_MOVACT']  <= 14.0));
    }
}


function exp_Personasqueenviajesdemovilidadactivahansufridoaccidentes_38rule3_eval_expression(context) {
    // ACCI_MOVACT > 14 AND ACCI_MOVACT <= 31

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['ACCI_MOVACT']  > 14.0) && (feature.properties['ACCI_MOVACT']  <= 31.0));
    } else {
        return ((feature['ACCI_MOVACT']  > 14.0) && (feature['ACCI_MOVACT']  <= 31.0));
    }
}


function exp_Evaluacindelapoblacinalosviajesentransportepbliconoestructurado_39rule0_eval_expression(context) {
    // EVAL_VIAJ_TPNE >= 0.42 AND EVAL_VIAJ_TPNE <= 1.065

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['EVAL_VIAJ_TPNE']  >= 0.42) && (feature.properties['EVAL_VIAJ_TPNE']  <= 1.065));
    } else {
        return ((feature['EVAL_VIAJ_TPNE']  >= 0.42) && (feature['EVAL_VIAJ_TPNE']  <= 1.065));
    }
}


function exp_Evaluacindelapoblacinalosviajesentransportepbliconoestructurado_39rule1_eval_expression(context) {
    // EVAL_VIAJ_TPNE > 1.065 AND EVAL_VIAJ_TPNE <= 1.71

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['EVAL_VIAJ_TPNE']  > 1.065) && (feature.properties['EVAL_VIAJ_TPNE']  <= 1.71));
    } else {
        return ((feature['EVAL_VIAJ_TPNE']  > 1.065) && (feature['EVAL_VIAJ_TPNE']  <= 1.71));
    }
}


function exp_Evaluacindelapoblacinalosviajesentransportepbliconoestructurado_39rule2_eval_expression(context) {
    // EVAL_VIAJ_TPNE > 1.71 AND EVAL_VIAJ_TPNE <= 2.355

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['EVAL_VIAJ_TPNE']  > 1.71) && (feature.properties['EVAL_VIAJ_TPNE']  <= 2.355));
    } else {
        return ((feature['EVAL_VIAJ_TPNE']  > 1.71) && (feature['EVAL_VIAJ_TPNE']  <= 2.355));
    }
}


function exp_Evaluacindelapoblacinalosviajesentransportepbliconoestructurado_39rule3_eval_expression(context) {
    // EVAL_VIAJ_TPNE > 2.355 AND EVAL_VIAJ_TPNE <= 3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['EVAL_VIAJ_TPNE']  > 2.355) && (feature.properties['EVAL_VIAJ_TPNE']  <= 3.0));
    } else {
        return ((feature['EVAL_VIAJ_TPNE']  > 2.355) && (feature['EVAL_VIAJ_TPNE']  <= 3.0));
    }
}


function exp_Evaluacindelapoblacinalosviajesentransportepblicoestructurado_40rule0_eval_expression(context) {
    // EVAL_VIAJ_TPE >= 0 AND EVAL_VIAJ_TPE <= 1

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['EVAL_VIAJ_TPE']  >= 0.0) && (feature.properties['EVAL_VIAJ_TPE']  <= 1.0));
    } else {
        return ((feature['EVAL_VIAJ_TPE']  >= 0.0) && (feature['EVAL_VIAJ_TPE']  <= 1.0));
    }
}


function exp_Evaluacindelapoblacinalosviajesentransportepblicoestructurado_40rule1_eval_expression(context) {
    // EVAL_VIAJ_TPE > 1 AND EVAL_VIAJ_TPE <= 2

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['EVAL_VIAJ_TPE']  > 1.0) && (feature.properties['EVAL_VIAJ_TPE']  <= 2.0));
    } else {
        return ((feature['EVAL_VIAJ_TPE']  > 1.0) && (feature['EVAL_VIAJ_TPE']  <= 2.0));
    }
}


function exp_Evaluacindelapoblacinalosviajesentransportepblicoestructurado_40rule2_eval_expression(context) {
    // EVAL_VIAJ_TPE > 2 AND EVAL_VIAJ_TPE <= 3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['EVAL_VIAJ_TPE']  > 2.0) && (feature.properties['EVAL_VIAJ_TPE']  <= 3.0));
    } else {
        return ((feature['EVAL_VIAJ_TPE']  > 2.0) && (feature['EVAL_VIAJ_TPE']  <= 3.0));
    }
}


function exp_Evaluacindelapoblacinalosviajesentransportepblicoestructurado_40rule3_eval_expression(context) {
    // EVAL_VIAJ_TPE > 3 AND EVAL_VIAJ_TPE <= 4

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['EVAL_VIAJ_TPE']  > 3.0) && (feature.properties['EVAL_VIAJ_TPE']  <= 4.0));
    } else {
        return ((feature['EVAL_VIAJ_TPE']  > 3.0) && (feature['EVAL_VIAJ_TPE']  <= 4.0));
    }
}


function exp_Evaluacindelapoblacinalosviajesentransportepblicoestructurado_40rule4_eval_expression(context) {
    // EVAL_VIAJ_TPE > 4 AND EVAL_VIAJ_TPE <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['EVAL_VIAJ_TPE']  > 4.0) && (feature.properties['EVAL_VIAJ_TPE']  <= 5.0));
    } else {
        return ((feature['EVAL_VIAJ_TPE']  > 4.0) && (feature['EVAL_VIAJ_TPE']  <= 5.0));
    }
}


function exp_Evaluacindelapoblacinalosviajesdemovilidadactiva_41rule0_eval_expression(context) {
    // EVAL_VIAJ_MOVACT >= 0 AND EVAL_VIAJ_MOVACT <= 1

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['EVAL_VIAJ_MOVACT']  >= 0.0) && (feature.properties['EVAL_VIAJ_MOVACT']  <= 1.0));
    } else {
        return ((feature['EVAL_VIAJ_MOVACT']  >= 0.0) && (feature['EVAL_VIAJ_MOVACT']  <= 1.0));
    }
}


function exp_Evaluacindelapoblacinalosviajesdemovilidadactiva_41rule1_eval_expression(context) {
    // EVAL_VIAJ_MOVACT > 1 AND EVAL_VIAJ_MOVACT <= 2

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['EVAL_VIAJ_MOVACT']  > 1.0) && (feature.properties['EVAL_VIAJ_MOVACT']  <= 2.0));
    } else {
        return ((feature['EVAL_VIAJ_MOVACT']  > 1.0) && (feature['EVAL_VIAJ_MOVACT']  <= 2.0));
    }
}


function exp_Evaluacindelapoblacinalosviajesdemovilidadactiva_41rule2_eval_expression(context) {
    // EVAL_VIAJ_MOVACT > 2 AND EVAL_VIAJ_MOVACT <= 3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['EVAL_VIAJ_MOVACT']  > 2.0) && (feature.properties['EVAL_VIAJ_MOVACT']  <= 3.0));
    } else {
        return ((feature['EVAL_VIAJ_MOVACT']  > 2.0) && (feature['EVAL_VIAJ_MOVACT']  <= 3.0));
    }
}


function exp_Evaluacindelapoblacinalosviajesdemovilidadactiva_41rule3_eval_expression(context) {
    // EVAL_VIAJ_MOVACT > 3 AND EVAL_VIAJ_MOVACT <= 4

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['EVAL_VIAJ_MOVACT']  > 3.0) && (feature.properties['EVAL_VIAJ_MOVACT']  <= 4.0));
    } else {
        return ((feature['EVAL_VIAJ_MOVACT']  > 3.0) && (feature['EVAL_VIAJ_MOVACT']  <= 4.0));
    }
}


function exp_Calificacindelapoblacinaprestadoresdeserviciosdetransportenoestructurado_42rule0_eval_expression(context) {
    // CALIF_SERV_TPNE >= 0.25 AND CALIF_SERV_TPNE <= 1.25

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['CALIF_SERV_TPNE']  >= 0.25) && (feature.properties['CALIF_SERV_TPNE']  <= 1.25));
    } else {
        return ((feature['CALIF_SERV_TPNE']  >= 0.25) && (feature['CALIF_SERV_TPNE']  <= 1.25));
    }
}


function exp_Calificacindelapoblacinaprestadoresdeserviciosdetransportenoestructurado_42rule1_eval_expression(context) {
    // CALIF_SERV_TPNE > 1.25 AND CALIF_SERV_TPNE <= 2.25

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['CALIF_SERV_TPNE']  > 1.25) && (feature.properties['CALIF_SERV_TPNE']  <= 2.25));
    } else {
        return ((feature['CALIF_SERV_TPNE']  > 1.25) && (feature['CALIF_SERV_TPNE']  <= 2.25));
    }
}


function exp_Calificacindelapoblacinaprestadoresdeserviciosdetransportenoestructurado_42rule2_eval_expression(context) {
    // CALIF_SERV_TPNE > 2.25 AND CALIF_SERV_TPNE <= 3.25

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['CALIF_SERV_TPNE']  > 2.25) && (feature.properties['CALIF_SERV_TPNE']  <= 3.25));
    } else {
        return ((feature['CALIF_SERV_TPNE']  > 2.25) && (feature['CALIF_SERV_TPNE']  <= 3.25));
    }
}


function exp_Calificacindelapoblacinaprestadoresdeserviciosdetransportenoestructurado_42rule3_eval_expression(context) {
    // CALIF_SERV_TPNE > 3.25 AND CALIF_SERV_TPNE <= 4.25

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['CALIF_SERV_TPNE']  > 3.25) && (feature.properties['CALIF_SERV_TPNE']  <= 4.25));
    } else {
        return ((feature['CALIF_SERV_TPNE']  > 3.25) && (feature['CALIF_SERV_TPNE']  <= 4.25));
    }
}


function exp_Calificacindelapoblacinaprestadoresdeserviciosdetransporteestructurado_43rule0_eval_expression(context) {
    // CALIF_SERV_TPE >= 0 AND CALIF_SERV_TPE <= 0.24

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['CALIF_SERV_TPE']  >= 0.0) && (feature.properties['CALIF_SERV_TPE']  <= 0.24));
    } else {
        return ((feature['CALIF_SERV_TPE']  >= 0.0) && (feature['CALIF_SERV_TPE']  <= 0.24));
    }
}


function exp_Calificacindelapoblacinaprestadoresdeserviciosdetransporteestructurado_43rule1_eval_expression(context) {
    // CALIF_SERV_TPE > 0.24 AND CALIF_SERV_TPE <= 0.77

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['CALIF_SERV_TPE']  > 0.24) && (feature.properties['CALIF_SERV_TPE']  <= 0.77));
    } else {
        return ((feature['CALIF_SERV_TPE']  > 0.24) && (feature['CALIF_SERV_TPE']  <= 0.77));
    }
}


function exp_Calificacindelapoblacinaprestadoresdeserviciosdetransporteestructurado_43rule2_eval_expression(context) {
    // CALIF_SERV_TPE > 0.77 AND CALIF_SERV_TPE <= 1.75

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['CALIF_SERV_TPE']  > 0.77) && (feature.properties['CALIF_SERV_TPE']  <= 1.75));
    } else {
        return ((feature['CALIF_SERV_TPE']  > 0.77) && (feature['CALIF_SERV_TPE']  <= 1.75));
    }
}


function exp_Calificacindelapoblacinaprestadoresdeserviciosdetransporteestructurado_43rule3_eval_expression(context) {
    // CALIF_SERV_TPE > 1.75 AND CALIF_SERV_TPE <= 3

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['CALIF_SERV_TPE']  > 1.75) && (feature.properties['CALIF_SERV_TPE']  <= 3.0));
    } else {
        return ((feature['CALIF_SERV_TPE']  > 1.75) && (feature['CALIF_SERV_TPE']  <= 3.0));
    }
}


function exp_Calificacindelapoblacinaprestadoresdeserviciosdetransporteestructurado_43rule4_eval_expression(context) {
    // CALIF_SERV_TPE > 3 AND CALIF_SERV_TPE <= 5

    var feature = context.feature;
    
    if (feature.properties) {
        return ((feature.properties['CALIF_SERV_TPE']  > 3.0) && (feature.properties['CALIF_SERV_TPE']  <= 5.0));
    } else {
        return ((feature['CALIF_SERV_TPE']  > 3.0) && (feature['CALIF_SERV_TPE']  <= 5.0));
    }
}