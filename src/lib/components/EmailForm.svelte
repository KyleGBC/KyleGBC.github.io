<script lang="ts">
    import * as Field from "$lib/components/ui/field";
    import { Input } from "$lib/components/ui/input";
	import { Button } from "./ui/button";
	import { Textarea } from "./ui/textarea";
</script>

<form class="font-mono" action="https://api.web3forms.com/submit" method="POST">
    <input type="hidden" name="access_key" value="53618dac-69ca-408a-9dde-0a32a005de09">
    <Field.Set>
        <div class="grid grid-col-2 gap-4">
            <Field.Field class="col-1">
                <Field.Label for="name">Name</Field.Label>
                <Input id="name" name="name" placeholder="Bjarne Stroustrup"/>
            </Field.Field>
            <Field.Field class="col-2">
                <Field.Label for="email">Email</Field.Label>
                <Input id="email" name="email" placeholder="bjarne@stroustrup.com" type="email"/>
            </Field.Field>
        </div>
        <Field.Field>
            <Field.Label for="subject">Subject</Field.Label>
            <Input id="subject" name="subject" placeholder="Cool site!"/>
        </Field.Field>
        <Field.Field>
            <Field.Label for="message">Message</Field.Label>
            <Textarea id="message" name="message" placeholder="Hello, world..." required class="min-h-[100px] bg-primary-foreground resize-none sm:min-w-[300px]"/>
        </Field.Field>
        <Field.Field orientation="horizontal">
            <Button type="submit" class="bg-orange-400 transition-colors">Send message 📩</Button>
        </Field.Field>
    </Field.Set>
</form>