export default Object.entries(import.meta.glob(['./components/**/!(*.test.[jt]sx)*.([jt]sx)'], { eager: true, import: 'default' }) ?? {})
  .reduce((acc, [file, fn]) => {
    const fileName = file.split("/").pop()?.split(".")?.[0] ?? "";
    let componentName = fileName;
    if (!componentName) {
      return acc;
    }
    while (componentName in acc) {
      const appender = file.replace(new RegExp(`/${componentName}.*`), "")?.split("/")?.pop() ?? "";
      if (!appender) {
        return acc;
      }
      componentName = [appender, componentName].join("/");
      if (componentName === file || !componentName) {
        return acc;
      }
    }
    return {...acc, [componentName]: fn};
  }, {} as Record<string, unknown>);
