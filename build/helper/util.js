function resolveDatetimeStringFromRef(datetimeRef) {
  const yearStr = datetimeRef.slice(0, 4);
  const dateStr = datetimeRef.slice(4, 8);
  const timeStr = datetimeRef.slice(8);

  return [[yearStr, dateStr.replace(/(\d{2})(?:\B)/g, '$1\-')].join('-'), timeStr.replace(/(\d{2})(?:\B)/g, '$1\:'), '+0800'].join(' ');
}

module.exports = { resolveDatetimeStringFromRef };
