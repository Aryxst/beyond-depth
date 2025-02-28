// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// made by blueversal
ServerEvents.recipes(event => {
  event.remove({ id: "additionaladditions:rose_gold_upgrade" });
});

ServerEvents.recipes(event => {
  event
    .shaped("additionaladditions:rose_gold_upgrade", ["cCc", "CCC", "cCc"], {
      c: "minecraft:stone",
      C: "additionaladditions:rose_gold_alloy",
    })
    .id("additionaladditions:rose_gold_upgrade");

  event
    .shaped("additionaladditions:rose_gold_upgrade", ["cPc", "cCc", "ccc"], {
      c: "minecraft:iron_ingot",
      C: "minecraft:stone",
      P: "additionaladditions:rose_gold_upgrade",
    })
    .result("2x additionaladditions:rose_gold_upgrade");
});
