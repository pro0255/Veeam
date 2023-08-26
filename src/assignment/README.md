# Improvements

- The entire application could have more advanced styling.
- The application needs additional testing, particularly for testing certain parts of the code that handle business logic. React Testing Library could be used for this purpose.
- While I attempted to create a JSON schema, I realize that the schema generation could be more closely connected to existing types. With a few enhancements, the schema could automatically react to changes when new FormFields are added.
- It's possible to improve the accessibility (a11y) of some HTML entities.
- I'm uncertain about how to handle the behavior of RadioButtons. They should be probably already defined as object. "{type: enum, values: [{}, {}, {}]}". It would be easier to handle a logic. For now, I have designed not transparent `createFormElements`.
- All the components were designed as uncontrolled. With a bit more time, they could be transformed into controlled components.
- It might be beneficial for the entire form to support validation using a library like Yup.
- The typing of the getValues function could be enhanced.

# Explanation of Certain Topics

## Testing

I created tests for one function to ensure it worked correctly. These tests were focused on the application's interface rather than specific implementation details. More tests could be added to cover the business logic handled by hooks.

## Time

### Estimated vs. Actual Time

- I estimated the work would take around 2MD (measurement days).
- In reality, it took me approximately 1.7MD.

### Work Description

- A significant portion of time was spent on building custom JSON validation, which took roughly 0.5MD.
- Designing the form concept wasn't particularly difficult. The most challenging aspect was resolving the issue with RadioButtons, ensuring that only one option could be selected.

# Questions

- Is it acceptable to overlook styling, or is it important to focus on styling as well?
- Should I develop a form logic that makes all values accessible to the client, or it is only about a rendering a form?
- Is it ok to use a monaco-editor for json input?
- Is it fine to skip a certain situation that requires two tabs (config\result)? I've created a design with two columns. Is this situation important for the design, or is it something minor that can be added later?
- Am I allowed to share a solution for the assignment on GitHub, or is it supposed to be kept private? Can I invite colleagues from development to contribute to a private repository?
- Should I enhance a code with comments or are the guys ok with thoughts that code (tests) should be a "documentation" and comments are not redundant?