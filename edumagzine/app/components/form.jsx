import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";

// Zod schemas
const PersonSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters"),
  age: z
    .number()
    .min(1, "Age must be at least 1")
    .max(120, "Age must be less than 120"),
  email: z.string().min(1, "Email is required").email("Invalid email format"),
});

const FormSchema = z.object({
  projectName: z
    .string()
    .min(1, "Project name is required")
    .min(3, "Project name must be at least 3 characters"),
  people: z.array(PersonSchema).min(1, "At least one person is required"),
});

const defaultValues = {
  projectName: "",
  people: [{ name: "", age: 0, email: "" }],
};

export default function DynamicFormExample() {
  const form = useForm({
    defaultValues,
    validators: {
      onChange: FormSchema,
    },
    onSubmit: async ({ value }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", value);
      alert(`Form submitted successfully!\n\n${JSON.stringify(value, null, 2)}`);
    },
  });

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Dynamic Team Form</h1>
        <p className="text-muted-foreground">
          Create a project and add team members dynamically
        </p>
      </div>

      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        {/* Project Name Field */}
        <form.Field name="projectName">
          {({ state, handleChange }) => (
            <div className="space-y-2">
              <Label htmlFor="projectName">Project Name</Label>
              <Input
                id="projectName"
                type="text"
                value={state.value}
                onChange={(e) => handleChange(e.target.value)}
                placeholder="Enter project name"
              />
              {state.meta.errors.length > 0 && state.meta.isTouched && (
                <p className="text-sm text-red-500">{state.meta.errors[0]?.message}</p>
              )}
            </div>
          )}
        </form.Field>

        {/* People Array Field */}
        <form.Field name="people" mode="array">
          {(field) => (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Team Members</h2>
                <Button
                  type="button"
                  onClick={() => field.pushValue({ name: "", age: 0, email: "" })}
                >
                  Add Person
                </Button>
              </div>

              {field.state.value.map((_, i) => (
                <Card key={i}>
                  <CardHeader className="flex items-center justify-between">
                    <CardTitle>Person {i + 1}</CardTitle>
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => field.removeValue(i)}
                    >
                      Remove
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <field.Field name={`${i}.name`}>
                      {({ state, handleChange }) => (
                        <div className="space-y-1">
                          <Label htmlFor={`name-${i}`}>Name</Label>
                          <Input
                            id={`name-${i}`}
                            value={state.value}
                            onChange={(e) => handleChange(e.target.value)}
                            placeholder="Enter name"
                          />
                          {state.meta.errors.length > 0 && state.meta.isTouched && (
                            <p className="text-sm text-red-500">
                              {state.meta.errors[0]?.message}
                            </p>
                          )}
                        </div>
                      )}
                    </field.Field>

                    <field.Field name={`${i}.age`}>
                      {({ state, handleChange }) => (
                        <div className="space-y-1">
                          <Label htmlFor={`age-${i}`}>Age</Label>
                          <Input
                            id={`age-${i}`}
                            type="number"
                            value={state.value}
                            onChange={(e) => handleChange(Number(e.target.value))}
                            placeholder="Enter age"
                          />
                          {state.meta.errors.length > 0 && state.meta.isTouched && (
                            <p className="text-sm text-red-500">
                              {state.meta.errors[0]?.message}
                            </p>
                          )}
                        </div>
                      )}
                    </field.Field>

                    <field.Field name={`${i}.email`}>
                      {({ state, handleChange }) => (
                        <div className="space-y-1">
                          <Label htmlFor={`email-${i}`}>Email</Label>
                          <Input
                            id={`email-${i}`}
                            type="email"
                            value={state.value}
                            onChange={(e) => handleChange(e.target.value)}
                            placeholder="Enter email"
                          />
                          {state.meta.errors.length > 0 && state.meta.isTouched && (
                            <p className="text-sm text-red-500">
                              {state.meta.errors[0]?.message}
                            </p>
                          )}
                        </div>
                      )}
                    </field.Field>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </form.Field>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
