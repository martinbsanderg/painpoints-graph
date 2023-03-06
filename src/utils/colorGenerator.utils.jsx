/* inspo from this site https://krazydad.com/tutorials/makecolors.php */

export const lineColorGenerator=(i, lenght, phase = 0) => {
  const center = 128;
  const width = 127;
  const frequency = (Math.PI * 2) /lenght;
  const red = Math.round(Math.sin(frequency * i + 2 + phase) * width + center)
  const green = Math.round(Math.sin(frequency * i + 0 + phase) * width + center);
  const blue = Math.round(Math.sin(frequency * i + 4 + phase) * width + center);
  return [red, green,blue]
}
