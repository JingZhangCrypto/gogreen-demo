export function isMobileDevice(userAgent: string): boolean {
  return (
    userAgent.match(
      /Android|webOS|iPhone|iPad|iPod|bada|Symbian|Palm|CriOS|BlackBerry|IEMobile|WindowsMobile|Opera Mini/i
    ) !== null
  )
}
