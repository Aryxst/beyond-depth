ServerEvents.recipes(event => {
  // Remove old items first (if needed)
  event.remove({ id: "everycomp:vf/undergarden/grongle_table" });
  event.remove({ id: "everycomp:vf/undergarden/grongle_chair" });
  event.remove({ id: "everycomp:vf/undergarden/grongle_stool" });
  event.remove({ id: "everycomp:vf/undergarden/smogstem_table" });
  event.remove({ id: "everycomp:vf/undergarden/smogstem_chair" });
  event.remove({ id: "everycomp:vf/undergarden/smogstem_stool" });
  event.remove({ id: "everycomp:vf/undergarden/wigglewood_table" });
  event.remove({ id: "everycomp:vf/undergarden/wigglewood_chair" });
  event.remove({ id: "everycomp:vf/undergarden/wigglewood_stool" });

  event
    .shaped("everycomp:vf/undergarden/grongle_table", ["   ", "CCC", "c c"], {
      c: "undergarden:grongle_slab",
      C: "undergarden:grongle_planks",
    })
    .id("everycomp:vf/undergarden/grongle_table");

  event
    .shaped("everycomp:vf/undergarden/grongle_stool", ["   ", "ccc", "c c"], {
      c: "undergarden:grongle_slab",
    })
    .id("everycomp:vf/undergarden/grongle_stool");

  event
    .shaped("everycomp:vf/undergarden/grongle_chair", ["c  ", "CCC", "c c"], {
      c: "undergarden:grongle_slab",
      C: "undergarden:grongle_planks",
    })
    .id("everycomp:vf/undergarden/grongle_chair");

  event
    .shaped("everycomp:vf/undergarden/smogstem_table", ["   ", "CCC", "c c"], {
      c: "undergarden:smogstem_slab",
      C: "undergarden:smogstem_planks",
    })
    .id("everycomp:vf/undergarden/smogstem_table");

  event
    .shaped("everycomp:vf/undergarden/smogstem_stool", ["   ", "ccc", "c c"], {
      c: "undergarden:smogstem_slab",
    })
    .id("everycomp:vf/undergarden/smogstem_stool");

  event
    .shaped("everycomp:vf/undergarden/smogstem_chair", ["c  ", "CCC", "c c"], {
      c: "undergarden:smogstem_slab",
      C: "undergarden:smogstem_planks",
    })
    .id("everycomp:vf/undergarden/smogstem_chair");

  event
    .shaped("everycomp:vf/undergarden/wigglewood_table", ["   ", "CCC", "c c"], {
      c: "undergarden:wigglewood_slab",
      C: "undergarden:wigglewood_planks",
    })
    .id("everycomp:vf/undergarden/wigglewood_table");

  event
    .shaped("everycomp:vf/undergarden/wigglewood_stool", ["   ", "ccc", "c c"], {
      c: "undergarden:wigglewood_slab",
    })
    .id("everycomp:vf/undergarden/wigglewood_stool");

  event
    .shaped("everycomp:vf/undergarden/wigglewood_chair", ["c  ", "CCC", "c c"], {
      c: "undergarden:wigglewood_slab",
      C: "undergarden:wigglewood_planks",
    })
    .id("everycomp:vf/undergarden/wigglewood_chair");
});
