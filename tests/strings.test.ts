import { assertEquals } from "https://deno.land/std@0.99.0/testing/asserts.ts";
import { StringUtils } from "../mod.ts";

Deno.test("Title", () => {
    assertEquals(
        StringUtils.title("Hello world!"),
        "Hello World!"
    );

    assertEquals(
        StringUtils.title(StringUtils as any),
        null
    );
});

Deno.test("isString", () => {
    assertEquals(
        StringUtils.isString("Hi"),
        true
    );

    assertEquals(
        StringUtils.isString(3),
        false
    );

    assertEquals( // eslint-disable-next-line no-new-wrappers
        StringUtils.isString(new String("hi")),
        true
    );
});

Deno.test("isFullString", () => {
    assertEquals(
        StringUtils.isFullString(null as any),
        false
    );

    assertEquals(
        StringUtils.isFullString(""),
        false
    );
    assertEquals(
        StringUtils.isFullString(" "),
        false
    );

    assertEquals(
        StringUtils.isFullString("Hello"),
        true
    );
});

Deno.test("isCamelCase", () => {
    assertEquals(
        StringUtils.isCamelCase("hi"),
        true
    );
    assertEquals(
        StringUtils.isCamelCase("hI"),
        false
    );
});
